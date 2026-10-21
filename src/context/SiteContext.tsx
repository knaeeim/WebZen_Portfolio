"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import {
  SiteData,
  SectionItem,
  HeroContent,
  ThemeConfig,
  SiteContact,
  ServiceItem,
  ProjectItem,
  ProjectCategory,
  PricingPlan,
  TestimonialItem,
  FaqItem,
  StatItem,
  FooterConfig,
  FooterLinkItem,
  SeoConfig,
} from "@/types/site";
import { initialSiteData } from "@/data/defaultSiteData";

const STORAGE_KEY = "webzen_bangladesh_site_data_v5_radiant";

interface SiteContextType {
  data: SiteData;
  isLoaded: boolean;
  isSyncing: boolean;
  isCloudSynced: boolean;
  updateSiteData: (partial: Partial<SiteData>) => void;
  updateHero: (hero: Partial<HeroContent>) => void;
  updateTheme: (theme: Partial<ThemeConfig>) => void;
  updateContact: (contact: Partial<SiteContact>) => void;
  
  // Section management
  toggleSection: (sectionId: string) => void;
  reorderSection: (sectionId: string, direction: "up" | "down") => void;
  addSection: (section: Omit<SectionItem, "order">) => void;
  deleteSection: (sectionId: string) => void;
  updateSection: (sectionId: string, updates: Partial<SectionItem>) => void;

  // Items management
  updateStats: (stats: StatItem[]) => void;
  addService: (service: ServiceItem) => void;
  updateService: (id: string, updates: Partial<ServiceItem>) => void;
  deleteService: (id: string) => void;

  addProject: (project: ProjectItem) => void;
  updateProject: (id: string, updates: Partial<ProjectItem>) => void;
  deleteProject: (id: string) => void;
  addProjectCategory: (category: ProjectCategory) => void;
  deleteProjectCategory: (categoryId: string) => void;
  updateProjectCategory: (id: string, updates: Partial<ProjectCategory>) => void;

  addPricing: (plan: PricingPlan) => void;
  updatePricing: (id: string, updates: Partial<PricingPlan>) => void;
  deletePricing: (id: string) => void;

  addTestimonial: (test: TestimonialItem) => void;
  updateTestimonial: (id: string, updates: Partial<TestimonialItem>) => void;
  deleteTestimonial: (id: string) => void;

  addFaq: (faq: FaqItem) => void;
  updateFaq: (id: string, updates: Partial<FaqItem>) => void;
  deleteFaq: (id: string) => void;

  // Security
  updatePassword: (newPassword: string) => void;

  // Footer Management
  updateFooter: (updates: Partial<FooterConfig>) => void;

  // SEO & Social OpenGraph
  updateSeo: (updates: Partial<SeoConfig>) => void;

  // Immediate Save to Storage & Cloud
  saveAllNow: (explicitData?: SiteData) => Promise<boolean>;

  // Import / Export / Reset
  resetToDefaults: () => void;
  exportDataToJson: () => string;
  importDataFromJson: (jsonStr: string) => boolean;
}

const SiteContext = createContext<SiteContextType | null>(null);

export function SiteProvider({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState<SiteData>(initialSiteData);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isSyncing, setIsSyncing] = useState(false);
  const [isCloudSynced, setIsCloudSynced] = useState(false);
  const syncTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // 1. Immediately hydrate from localStorage for zero flash
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);

        // Clean up legacy dummy demo projects if previously cached
        let currentProjects = parsed.projects && Array.isArray(parsed.projects)
          ? parsed.projects.filter((p: any) => !["proj-1", "proj-2", "proj-3", "proj-4", "proj-5", "proj-6"].includes(p.id))
          : initialSiteData.projects;

        const currentIds = new Set(currentProjects.map((p: any) => p.id));
        const newRealProjects = initialSiteData.projects.filter(
          (p) => !currentIds.has(p.id) && ["proj-job-prep", "proj-skillbridge", "proj-house-manager"].includes(p.id)
        );
        if (newRealProjects.length > 0) {
          currentProjects = [...currentProjects, ...newRealProjects];
        }

        setData({
          ...initialSiteData,
          ...parsed,
          projects: currentProjects,
          hero: { ...initialSiteData.hero, ...(parsed.hero || {}) },
          theme: { ...initialSiteData.theme, ...(parsed.theme || {}) },
          contact: { ...initialSiteData.contact, ...(parsed.contact || {}) },
          security: {
            ...initialSiteData.security,
            ...(parsed.security || {}),
          },
          footer: {
            ...initialSiteData.footer,
            ...(parsed.footer || {}),
          },
          seo: {
            ...initialSiteData.seo,
            ...(parsed.seo || {}),
          },
        });
      }
    } catch (e) {
      console.warn("Failed to load saved state from localStorage:", e);
    } finally {
      setIsLoaded(true);
    }

    // 2. Fetch live data from MongoDB Atlas
    fetch("/api/site-data")
      .then((res) => (res.ok ? res.json() : null))
      .then((serverData) => {
        if (serverData && serverData.companyName) {
          setData(serverData);
          setIsCloudSynced(true);
          try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(serverData));
          } catch (e) {}
        }
      })
      .catch((err) => {
        console.warn("Could not fetch remote site-data from MongoDB:", err);
      });
  }, []);

  const saveToStorage = (newData: SiteData) => {
    setData(newData);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
    } catch (e) {
      console.error("Failed to save to localStorage:", e);
    }

    // Real-time synchronization to MongoDB Atlas
    setIsSyncing(true);
    if (syncTimeoutRef.current) {
      clearTimeout(syncTimeoutRef.current);
    }
    syncTimeoutRef.current = setTimeout(async () => {
      try {
        const res = await fetch("/api/site-data", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newData),
        });
        if (res.ok) {
          setIsCloudSynced(true);
        }
      } catch (err) {
        console.warn("Failed to sync to MongoDB:", err);
      } finally {
        setIsSyncing(false);
      }
    }, 400);
  };

  const saveAllNow = async (explicitData?: SiteData): Promise<boolean> => {
    const payload = explicitData || data;
    setData(payload);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    } catch (e) {
      console.error("Failed to save to localStorage:", e);
    }

    if (syncTimeoutRef.current) {
      clearTimeout(syncTimeoutRef.current);
    }

    setIsSyncing(true);
    try {
      const res = await fetch("/api/site-data", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        setIsCloudSynced(true);
        return true;
      }
      return false;
    } catch (err) {
      console.warn("Failed to sync to MongoDB:", err);
      return false;
    } finally {
      setIsSyncing(false);
    }
  };

  const updateSiteData = (partial: Partial<SiteData>) => {
    saveToStorage({ ...data, ...partial });
  };

  const updateHero = (heroUpdates: Partial<HeroContent>) => {
    saveToStorage({
      ...data,
      hero: { ...data.hero, ...heroUpdates },
    });
  };

  const updateTheme = (themeUpdates: Partial<ThemeConfig>) => {
    saveToStorage({
      ...data,
      theme: { ...data.theme, ...themeUpdates },
    });
  };

  const updateContact = (contactUpdates: Partial<SiteContact>) => {
    saveToStorage({
      ...data,
      contact: { ...data.contact, ...contactUpdates },
    });
  };

  const toggleSection = (sectionId: string) => {
    const updated = data.sections.map((sec) =>
      sec.id === sectionId ? { ...sec, enabled: !sec.enabled } : sec
    );
    saveToStorage({ ...data, sections: updated });
  };

  const reorderSection = (sectionId: string, direction: "up" | "down") => {
    const sorted = [...data.sections].sort((a, b) => a.order - b.order);
    const index = sorted.findIndex((s) => s.id === sectionId);
    if (index === -1) return;

    if (direction === "up" && index > 0) {
      const current = sorted[index];
      const prev = sorted[index - 1];
      const prevOrder = prev.order;
      prev.order = current.order;
      current.order = prevOrder;
    } else if (direction === "down" && index < sorted.length - 1) {
      const current = sorted[index];
      const next = sorted[index + 1];
      const nextOrder = next.order;
      next.order = current.order;
      current.order = nextOrder;
    }

    saveToStorage({ ...data, sections: sorted });
  };

  const addSection = (section: Omit<SectionItem, "order">) => {
    const maxOrder = data.sections.reduce((max, s) => Math.max(max, s.order), 0);
    const newSection: SectionItem = {
      ...section,
      order: maxOrder + 1,
    };
    saveToStorage({ ...data, sections: [...data.sections, newSection] });
  };

  const deleteSection = (sectionId: string) => {
    saveToStorage({
      ...data,
      sections: data.sections.filter((s) => s.id !== sectionId),
    });
  };

  const updateSection = (sectionId: string, updates: Partial<SectionItem>) => {
    saveToStorage({
      ...data,
      sections: data.sections.map((s) =>
        s.id === sectionId ? { ...s, ...updates } : s
      ),
    });
  };

  const updateStats = (stats: StatItem[]) => {
    saveToStorage({ ...data, stats });
  };

  const addService = (service: ServiceItem) => {
    saveToStorage({ ...data, services: [service, ...data.services] });
  };

  const updateService = (id: string, updates: Partial<ServiceItem>) => {
    saveToStorage({
      ...data,
      services: data.services.map((s) => (s.id === id ? { ...s, ...updates } : s)),
    });
  };

  const deleteService = (id: string) => {
    saveToStorage({
      ...data,
      services: data.services.filter((s) => s.id !== id),
    });
  };

  const addProject = (project: ProjectItem) => {
    saveToStorage({ ...data, projects: [project, ...data.projects] });
  };

  const updateProject = (id: string, updates: Partial<ProjectItem>) => {
    saveToStorage({
      ...data,
      projects: data.projects.map((p) => (p.id === id ? { ...p, ...updates } : p)),
    });
  };

  const deleteProject = (id: string) => {
    saveToStorage({
      ...data,
      projects: data.projects.filter((p) => p.id !== id),
    });
  };

  const addProjectCategory = (category: ProjectCategory) => {
    const currentCats = data.projectCategories || initialSiteData.projectCategories || [];
    saveToStorage({
      ...data,
      projectCategories: [...currentCats, category],
    });
  };

  const deleteProjectCategory = (categoryId: string) => {
    const currentCats = data.projectCategories || initialSiteData.projectCategories || [];
    saveToStorage({
      ...data,
      projectCategories: currentCats.filter((c) => c.id !== categoryId),
    });
  };

  const updateProjectCategory = (id: string, updates: Partial<ProjectCategory>) => {
    const currentCats = data.projectCategories || initialSiteData.projectCategories || [];
    saveToStorage({
      ...data,
      projectCategories: currentCats.map((c) => (c.id === id ? { ...c, ...updates } : c)),
    });
  };

  const addPricing = (plan: PricingPlan) => {
    saveToStorage({ ...data, pricing: [...data.pricing, plan] });
  };

  const updatePricing = (id: string, updates: Partial<PricingPlan>) => {
    saveToStorage({
      ...data,
      pricing: data.pricing.map((p) => (p.id === id ? { ...p, ...updates } : p)),
    });
  };

  const deletePricing = (id: string) => {
    saveToStorage({
      ...data,
      pricing: data.pricing.filter((p) => p.id !== id),
    });
  };

  const addTestimonial = (test: TestimonialItem) => {
    saveToStorage({ ...data, testimonials: [test, ...data.testimonials] });
  };

  const updateTestimonial = (id: string, updates: Partial<TestimonialItem>) => {
    saveToStorage({
      ...data,
      testimonials: data.testimonials.map((t) =>
        t.id === id ? { ...t, ...updates } : t
      ),
    });
  };

  const deleteTestimonial = (id: string) => {
    saveToStorage({
      ...data,
      testimonials: data.testimonials.filter((t) => t.id !== id),
    });
  };

  const addFaq = (faq: FaqItem) => {
    saveToStorage({ ...data, faqs: [...data.faqs, faq] });
  };

  const updateFaq = (id: string, updates: Partial<FaqItem>) => {
    saveToStorage({
      ...data,
      faqs: data.faqs.map((f) => (f.id === id ? { ...f, ...updates } : f)),
    });
  };

  const deleteFaq = (id: string) => {
    saveToStorage({
      ...data,
      faqs: data.faqs.filter((f) => f.id !== id),
    });
  };

  const updateFooter = (updates: Partial<FooterConfig>) => {
    saveToStorage({
      ...data,
      footer: { ...data.footer, ...updates },
    });
  };

  const updateSeo = (updates: Partial<SeoConfig>) => {
    saveToStorage({
      ...data,
      seo: { ...data.seo, ...updates },
    });
  };

  const updatePassword = (newPassword: string) => {
    saveToStorage({
      ...data,
      security: {
        ...data.security,
        adminPassword: newPassword,
      },
    });
  };

  const resetToDefaults = () => {
    saveToStorage(initialSiteData);
  };

  const exportDataToJson = () => {
    return JSON.stringify(data, null, 2);
  };

  const importDataFromJson = (jsonStr: string): boolean => {
    try {
      const parsed = JSON.parse(jsonStr);
      if (parsed && parsed.companyName && parsed.sections) {
        saveToStorage(parsed);
        return true;
      }
      return false;
    } catch (e) {
      console.error("Invalid JSON provided for import:", e);
      return false;
    }
  };

  return (
    <SiteContext.Provider
      value={{
        data,
        isLoaded,
        isSyncing,
        isCloudSynced,
        updateSiteData,
        updateHero,
        updateTheme,
        updateContact,
        toggleSection,
        reorderSection,
        addSection,
        deleteSection,
        updateSection,
        updateStats,
        addService,
        updateService,
        deleteService,
        addProject,
        updateProject,
        deleteProject,
        addProjectCategory,
        deleteProjectCategory,
        updateProjectCategory,
        addPricing,
        updatePricing,
        deletePricing,
        addTestimonial,
        updateTestimonial,
        deleteTestimonial,
        addFaq,
        updateFaq,
        deleteFaq,
        updateFooter,
        updateSeo,
        saveAllNow,
        updatePassword,
        resetToDefaults,
        exportDataToJson,
        importDataFromJson,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
}

export function useSite() {
  const context = useContext(SiteContext);
  if (!context) {
    throw new Error("useSite must be used within a SiteProvider");
  }
  return context;
}
