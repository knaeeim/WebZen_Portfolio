"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useSite } from "@/context/SiteContext";
import { 
  SectionItem, 
  ServiceItem, 
  ProjectItem, 
  PricingPlan, 
  TestimonialItem,
  FaqItem,
  SectionType,
  FooterLinkItem
} from "@/types/site";
import { 
  Settings, 
  Eye, 
  EyeOff,
  RotateCcw, 
  Download, 
  Upload, 
  ImageIcon,
  Loader2,
  Tag,
  Plus, 
  Trash2, 
  ArrowUp, 
  ArrowDown, 
  Check, 
  Layers, 
  Sparkles, 
  Palette, 
  FileText, 
  FolderGit2, 
  BadgePercent, 
  MessageSquare, 
  Star,
  Heart,
  Phone, 
  CheckCircle2,
  ExternalLink,
  ChevronRight,
  HelpCircle,
  Clock,
  Workflow,
  Lock,
  Unlock,
  KeyRound,
  Shield,
  ShieldCheck,
  ShieldAlert,
  LogOut,
  PanelBottom,
  Share2,
  Globe
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription, 
  DialogFooter 
} from "@/components/ui/dialog";

export default function AdminPage() {
  const {
    data,
    isLoaded,
    updateSiteData,
    updateHero,
    updateTheme,
    updateContact,
    toggleSection,
    reorderSection,
    addSection,
    deleteSection,
    updateSection,
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
    updatePassword,
    updateFooter,
    updateSeo,
    resetToDefaults,
    exportDataToJson,
    importDataFromJson,
    isSyncing,
    isCloudSynced,
  } = useSite();

  const [activeTab, setActiveTab] = useState("sections");
  const [notification, setNotification] = useState<string | null>(null);

  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authChecked, setAuthChecked] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [authError, setAuthError] = useState(false);
  const [authLoading, setAuthLoading] = useState(false);

  // Password change states
  const [currentPassInput, setCurrentPassInput] = useState("");
  const [newPassInput, setNewPassInput] = useState("");
  const [confirmPassInput, setConfirmPassInput] = useState("");

  React.useEffect(() => {
    try {
      const isAuth = sessionStorage.getItem("webzen_admin_authenticated");
      if (isAuth === "true") {
        setIsAuthenticated(true);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setAuthChecked(true);
    }
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthLoading(true);
    setAuthError(false);

    try {
      const res = await fetch("/api/admin/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          password: passwordInput,
          clientStoredPassword: data.security?.adminPassword,
        }),
      });

      const result = await res.json();
      if (res.ok && result.success) {
        try {
          sessionStorage.setItem("webzen_admin_authenticated", "true");
        } catch (e) {}
        setIsAuthenticated(true);
        setAuthError(false);
        setPasswordInput("");
      } else {
        setAuthError(true);
      }
    } catch (e) {
      setAuthError(true);
    } finally {
      setAuthLoading(false);
    }
  };

  const handleLogout = () => {
    try {
      sessionStorage.removeItem("webzen_admin_authenticated");
    } catch (e) {}
    setIsAuthenticated(false);
    setPasswordInput("");
    showNotification("Studio locked successfully.");
  };

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/admin/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          password: currentPassInput,
          clientStoredPassword: data.security?.adminPassword,
        }),
      });

      const result = await res.json();
      if (!res.ok || !result.success) {
        alert("বর্তমান পাসওয়ার্ড সঠিক নয়!");
        return;
      }
    } catch (e) {
      alert("যাচাইকরণে সমস্যা হয়েছে। আবার চেষ্টা করুন।");
      return;
    }

    if (newPassInput.length < 6) {
      alert("New password must be at least 6 characters long.");
      return;
    }
    if (newPassInput !== confirmPassInput) {
      alert("New password and confirmation do not match!");
      return;
    }

    updatePassword(newPassInput);
    setCurrentPassInput("");
    setNewPassInput("");
    setConfirmPassInput("");
    showNotification("Master password updated successfully!");
  };

  // Modal states
  const [addSectionOpen, setAddSectionOpen] = useState(false);
  const [newSectionData, setNewSectionData] = useState({
    title: "",
    subtitle: "",
    heading: "",
    body: "",
    buttonText: "",
    buttonLink: "",
    layout: "center" as "center" | "left" | "right",
  });

  const [addServiceOpen, setAddServiceOpen] = useState(false);
  const [newServiceData, setNewServiceData] = useState<ServiceItem>({
    id: "",
    title: "",
    subtitle: "",
    description: "",
    icon: "CodeXml",
    featured: false,
    tags: ["Next.js", "TypeScript"],
    deliverables: ["Custom Code", "Clean Architecture"],
  });

  const [addProjectOpen, setAddProjectOpen] = useState(false);
  const [newProjectData, setNewProjectData] = useState<ProjectItem>({
    id: "",
    title: "",
    category: "Web Applications",
    description: "",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    client: "",
    country: "Dhaka, Bangladesh",
    liveUrl: "https://webzen.com.bd",
    tags: ["Next.js", "Tailwind"],
    metrics: "High Velocity Delivery",
    featured: true,
  });

  const [importModalOpen, setImportModalOpen] = useState(false);
  const [importJsonText, setImportJsonText] = useState("");
  const [uploadingProjectId, setUploadingProjectId] = useState<string | null>(null);
  const [modalUploading, setModalUploading] = useState(false);

  // Testimonial management states
  const [addTestimonialOpen, setAddTestimonialOpen] = useState(false);
  const [uploadingTestimonialId, setUploadingTestimonialId] = useState<string | null>(null);
  const [modalTestimonialUploading, setModalTestimonialUploading] = useState(false);
  const [newTestimonialData, setNewTestimonialData] = useState<TestimonialItem>({
    id: "",
    name: "",
    nameBn: "",
    role: "",
    roleBn: "",
    company: "",
    location: "Dhaka, Bangladesh",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    reaction: "❤️",
    content: "",
    contentBn: "",
  });

  // Category management states
  const [newCategoryName, setNewCategoryName] = useState("");
  const [newCategoryBn, setNewCategoryBn] = useState("");

  const projectCategories = data.projectCategories && data.projectCategories.length > 0
    ? data.projectCategories
    : [
        { id: "HealthTech", name: "HealthTech & Booking", nameBn: "হেলথটেক ও সিরিয়াল বুকিং" },
        { id: "Web Applications", name: "E-Commerce & Web", nameBn: "ই-কমার্স ও ওয়েবসাইট" },
        { id: "FinTech", name: "FinTech & Payments", nameBn: "ফিনটেক ও পেমেন্ট" },
        { id: "AI & Automation", name: "AI & Automation", nameBn: "AI ও অটোমেশন" },
        { id: "Mobile Apps", name: "Mobile Apps", nameBn: "মোবাইল অ্যাপস" },
        { id: "Enterprise Cloud", name: "Enterprise Cloud", nameBn: "এন্টারপ্রাইজ ক্লাউড" },
      ];

  const handleAddCategory = () => {
    const nameTrim = newCategoryName.trim();
    if (!nameTrim) {
      showNotification("Please enter a category name");
      return;
    }
    if (projectCategories.some((c) => c.id.toLowerCase() === nameTrim.toLowerCase())) {
      showNotification("A category with this name already exists");
      return;
    }
    addProjectCategory({
      id: nameTrim,
      name: nameTrim,
      nameBn: newCategoryBn.trim() || undefined,
    });
    setNewCategoryName("");
    setNewCategoryBn("");
    showNotification(`Category "${nameTrim}" added successfully!`);
  };

  const handleDeleteCategory = (catId: string, catName: string) => {
    if (projectCategories.length <= 1) {
      showNotification("At least one category must remain");
      return;
    }
    if (confirm(`Delete category "${catName}"? Projects assigned to this category will keep their label until updated.`)) {
      deleteProjectCategory(catId);
      showNotification(`Category "${catName}" deleted`);
    }
  };

  const uploadCoverFile = async (file: File): Promise<string> => {
    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.error || "Upload failed");
    }

    const data = await res.json();
    return data.url;
  };

  const handleProjectCoverUpload = async (projectId: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setUploadingProjectId(projectId);
      const url = await uploadCoverFile(file);
      updateProject(projectId, { image: url });
      showNotification("Project cover uploaded & saved successfully!");
    } catch (err) {
      console.warn("Server upload fallback to client DataURL:", err);
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result;
        if (typeof result === "string") {
          updateProject(projectId, { image: result });
          showNotification("Project cover loaded successfully!");
        }
      };
      reader.readAsDataURL(file);
    } finally {
      setUploadingProjectId(null);
      e.target.value = "";
    }
  };

  const handleNewProjectCoverUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setModalUploading(true);
      const url = await uploadCoverFile(file);
      setNewProjectData((prev) => ({ ...prev, image: url }));
      showNotification("Cover image uploaded successfully!");
    } catch (err) {
      console.warn("Server upload fallback to client DataURL:", err);
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result;
        if (typeof result === "string") {
          setNewProjectData((prev) => ({ ...prev, image: result }));
          showNotification("Cover image loaded successfully!");
        }
      };
      reader.readAsDataURL(file);
    } finally {
      setModalUploading(false);
      e.target.value = "";
    }
  };

  const [ogUploading, setOgUploading] = useState(false);

  const handleOgImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setOgUploading(true);
      const url = await uploadCoverFile(file);
      updateSeo({ ogImage: url });
      showNotification("OG Social Image uploaded & saved successfully!");
    } catch (err) {
      console.warn("Upload fallback to DataURL:", err);
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === "string") {
          updateSeo({ ogImage: reader.result });
          showNotification("OG Social Image loaded successfully!");
        }
      };
      reader.readAsDataURL(file);
    } finally {
      setOgUploading(false);
      e.target.value = "";
    }
  };

  const showNotification = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3000);
  };

  const handleTestimonialAvatarUpload = async (testId: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setUploadingTestimonialId(testId);
      const url = await uploadCoverFile(file);
      updateTestimonial(testId, { avatar: url });
      showNotification("Client avatar uploaded & saved successfully!");
    } catch (err) {
      console.warn("Upload fallback to DataURL:", err);
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === "string") {
          updateTestimonial(testId, { avatar: reader.result });
          showNotification("Client avatar saved successfully!");
        }
      };
      reader.readAsDataURL(file);
    } finally {
      setUploadingTestimonialId(null);
      e.target.value = "";
    }
  };

  const handleNewTestimonialAvatarUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setModalTestimonialUploading(true);
      const url = await uploadCoverFile(file);
      setNewTestimonialData((prev) => ({ ...prev, avatar: url }));
      showNotification("Client photo uploaded successfully!");
    } catch (err) {
      console.warn("Upload fallback to DataURL:", err);
      const reader = new FileReader();
      reader.onload = () => {
        const res = reader.result;
        if (typeof res === "string") {
          setNewTestimonialData((prev) => ({ ...prev, avatar: res }));
          showNotification("Client photo loaded!");
        }
      };
      reader.readAsDataURL(file);
    } finally {
      setModalTestimonialUploading(false);
      e.target.value = "";
    }
  };

  const handleCreateTestimonial = () => {
    if (!newTestimonialData.name.trim() || !newTestimonialData.content.trim()) {
      showNotification("Please provide client name and review content");
      return;
    }
    const newId = `test-${Date.now()}`;
    addTestimonial({
      ...newTestimonialData,
      id: newId,
    });
    setAddTestimonialOpen(false);
    setNewTestimonialData({
      id: "",
      name: "",
      nameBn: "",
      role: "",
      roleBn: "",
      company: "",
      location: "Dhaka, Bangladesh",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
      rating: 5,
      reaction: "❤️",
      content: "",
      contentBn: "",
    });
    showNotification("New client testimonial added successfully!");
  };

  // Footer CMS link states
  const [newNavLink, setNewNavLink] = useState({
    label: "",
    labelBn: "",
    url: "",
  });
  const [newSolLink, setNewSolLink] = useState({
    label: "",
    labelBn: "",
    url: "",
  });

  const footerNavLinks: FooterLinkItem[] = (data.footer?.navLinks && data.footer.navLinks.length > 0)
    ? data.footer.navLinks
    : [
        { id: "nav-1", label: "Services", labelBn: "সার্ভিসসমূহ", url: "#services" },
        { id: "nav-2", label: "Case Studies", labelBn: "প্রজেক্টসমূহ", url: "#projects" },
        { id: "nav-3", label: "Process", labelBn: "কাজের ধাপ", url: "#process" },
        { id: "nav-4", label: "Cost Estimator", labelBn: "বাজেট হিসাব", url: "#calculator" },
        { id: "nav-5", label: "Pricing Plans", labelBn: "প্যাকেজ ও খরচ", url: "#pricing" },
        { id: "nav-6", label: "Contact", labelBn: "যোগাযোগ", url: "#contact" },
      ];

  const footerSolutionsLinks: FooterLinkItem[] = (data.footer?.solutionsLinks && data.footer.solutionsLinks.length > 0)
    ? data.footer.solutionsLinks
    : [
        { id: "sol-1", label: "HealthTech & Booking", labelBn: "হেলথটেক ও সিরিয়াল বুকিং", url: "#services" },
        { id: "sol-2", label: "bKash / Nagad E-Commerce", labelBn: "অনলাইন শপ ও বিকাশ পেমেন্ট", url: "#services" },
        { id: "sol-3", label: "Custom Websites & Apps", labelBn: "কাস্টম ওয়েবসাইট ও অ্যাপ", url: "#services" },
        { id: "sol-4", label: "AI Chatbots & Automation", labelBn: "অটোমেশন ও AI চ্যাটবট", url: "#services" },
        { id: "sol-5", label: "Cloud Server Deployment", labelBn: "ক্লাউড সার্ভার ও মেইনটেন্যান্স", url: "#services" },
      ];

  const handleAddFooterNavLink = () => {
    if (!newNavLink.label.trim() || !newNavLink.url.trim()) {
      showNotification("Please enter both Link Label and Target URL");
      return;
    }
    const newItem: FooterLinkItem = {
      id: `nav-${Date.now()}`,
      label: newNavLink.label.trim(),
      labelBn: newNavLink.labelBn.trim() || undefined,
      url: newNavLink.url.trim(),
    };
    updateFooter({
      navLinks: [...footerNavLinks, newItem],
    });
    setNewNavLink({ label: "", labelBn: "", url: "" });
    showNotification(`Navigation link "${newItem.label}" added!`);
  };

  const handleDeleteFooterNavLink = (id: string, label: string) => {
    updateFooter({
      navLinks: footerNavLinks.filter((item) => item.id !== id),
    });
    showNotification(`Link "${label}" removed`);
  };

  const handleUpdateFooterNavLink = (id: string, updates: Partial<FooterLinkItem>) => {
    updateFooter({
      navLinks: footerNavLinks.map((item) => (item.id === id ? { ...item, ...updates } : item)),
    });
  };

  const handleAddFooterSolLink = () => {
    if (!newSolLink.label.trim() || !newSolLink.url.trim()) {
      showNotification("Please enter both Solution Label and Target URL");
      return;
    }
    const newItem: FooterLinkItem = {
      id: `sol-${Date.now()}`,
      label: newSolLink.label.trim(),
      labelBn: newSolLink.labelBn.trim() || undefined,
      url: newSolLink.url.trim(),
    };
    updateFooter({
      solutionsLinks: [...footerSolutionsLinks, newItem],
    });
    setNewSolLink({ label: "", labelBn: "", url: "" });
    showNotification(`Solution link "${newItem.label}" added!`);
  };

  const handleDeleteFooterSolLink = (id: string, label: string) => {
    updateFooter({
      solutionsLinks: footerSolutionsLinks.filter((item) => item.id !== id),
    });
    showNotification(`Solution "${label}" removed`);
  };

  const handleUpdateFooterSolLink = (id: string, updates: Partial<FooterLinkItem>) => {
    updateFooter({
      solutionsLinks: footerSolutionsLinks.map((item) => (item.id === id ? { ...item, ...updates } : item)),
    });
  };

  const handleExport = () => {
    const json = exportDataToJson();
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `webzen-bangladesh-backup-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showNotification("Configuration JSON exported successfully!");
  };

  const handleImport = () => {
    const success = importDataFromJson(importJsonText);
    if (success) {
      showNotification("Configuration imported & applied successfully!");
      setImportModalOpen(false);
      setImportJsonText("");
    } else {
      alert("Invalid JSON format. Please verify the structure and try again.");
    }
  };

  const handleAddCustomSection = () => {
    if (!newSectionData.title) return;
    const id = `custom-${Date.now()}`;
    addSection({
      id,
      type: "custom-content",
      title: newSectionData.title,
      subtitle: newSectionData.subtitle,
      enabled: true,
      customContent: {
        heading: newSectionData.heading || newSectionData.title,
        subheading: newSectionData.subtitle,
        body: newSectionData.body,
        buttonText: newSectionData.buttonText || undefined,
        buttonLink: newSectionData.buttonLink || undefined,
        layout: newSectionData.layout,
      },
    });
    setAddSectionOpen(false);
    setNewSectionData({
      title: "",
      subtitle: "",
      heading: "",
      body: "",
      buttonText: "",
      buttonLink: "",
      layout: "center",
    });
    showNotification("New Custom Section created!");
  };

  const handleCreateService = () => {
    if (!newServiceData.title) return;
    addService({
      ...newServiceData,
      id: `srv-${Date.now()}`,
    });
    setAddServiceOpen(false);
    showNotification("Service added successfully!");
  };

  const handleCreateProject = () => {
    if (!newProjectData.title) return;
    addProject({
      ...newProjectData,
      id: `proj-${Date.now()}`,
    });
    setAddProjectOpen(false);
    showNotification("Project added successfully!");
  };

  if (!isLoaded || !authChecked) {
    return (
      <div className="min-h-screen bg-[#061a33] flex items-center justify-center text-white text-xs font-mono">
        Loading Admin Studio...
      </div>
    );
  }

  // Render Cyber Security Lock Screen if not authenticated
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#061a33] text-slate-100 flex items-center justify-center p-4 relative overflow-hidden font-sans">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-gradient-to-tr from-cyan-500/15 via-blue-600/10 to-purple-600/15 blur-[120px] rounded-full pointer-events-none" />

        <div className="w-full max-w-md relative z-10">
          <div className="glass-card rounded-3xl p-8 border border-white/10 shadow-2xl relative">
            <div className="text-center space-y-3 mb-8">
              <div className="relative w-16 h-16 mx-auto">
                <div className="w-full h-full rounded-2xl overflow-hidden shadow-xl shadow-cyan-500/25 border border-white/15">
                  <img src="/logo.png" alt="WebZen Bangladesh" className="w-full h-full object-cover rounded-2xl" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-cyan-500 text-slate-950 flex items-center justify-center shadow-md">
                  <Lock className="w-3.5 h-3.5" />
                </div>
              </div>

              <div>
                <h1 className="text-xl font-bold text-white tracking-tight">
                  WebZen Studio Security Gate
                </h1>
                <p className="text-xs text-slate-400 mt-1">
                  Master Password Protected Area
                </p>
              </div>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Studio Password
                </label>
                <div className="relative">
                  <Input
                    autoFocus
                    type={showPassword ? "text" : "password"}
                    value={passwordInput}
                    onChange={(e) => {
                      setPasswordInput(e.target.value);
                      if (authError) setAuthError(false);
                    }}
                    placeholder="Enter password..."
                    className={`bg-white/[0.04] border pr-10 text-white text-xs h-11 rounded-xl transition-all ${
                      authError
                        ? "border-rose-500 focus:border-rose-500 shadow-sm shadow-rose-500/20"
                        : "border-white/10 focus:border-cyan-400"
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
                {authError && (
                  <p className="text-[11px] text-rose-400 mt-1.5 flex items-center gap-1">
                    <ShieldAlert className="w-3.5 h-3.5" />
                    <span>Incorrect master password. Please verify and try again.</span>
                  </p>
                )}
              </div>

              <Button
                type="submit"
                disabled={authLoading || !passwordInput}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold h-11 text-xs rounded-xl shadow-lg shadow-cyan-500/25 transition-all"
              >
                {authLoading ? (
                  <span>Verifying Credentials...</span>
                ) : (
                  <span className="flex items-center gap-1.5">
                    <KeyRound className="w-4 h-4" />
                    <span>Unlock Studio Dashboard</span>
                  </span>
                )}
              </Button>
            </form>

            <div className="mt-6 pt-5 border-t border-white/[0.08] text-center">
              <Link
                href="/"
                className="text-xs text-slate-400 hover:text-cyan-400 transition-colors"
              >
                ← Return to Public Website
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Sorted sections
  const sortedSections = [...data.sections].sort((a, b) => a.order - b.order);

  return (
    <div className="min-h-screen bg-[#061a33] text-slate-100 flex flex-col font-sans">
      
      {/* Top Admin Navigation Header */}
      <header className="sticky top-0 z-50 bg-[#08213d]/90 backdrop-blur-xl border-b border-white/10 px-4 sm:px-8 py-3.5 flex items-center justify-between gap-4">
        
        {/* Left branding */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg overflow-hidden border border-white/10 shrink-0 shadow-md shadow-cyan-500/20">
              <img src="/logo.png" alt="WebZen Logo" className="w-full h-full object-cover rounded-lg" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-sm text-white">WebZen Studio</span>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">
                  CMS v2.0
                </span>
              </div>
              <span className="text-[10px] text-slate-400">Admin Control Panel</span>
            </div>
          </Link>

          {/* MongoDB Atlas Live Sync Status */}
          <div className="hidden sm:flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-[11px] text-emerald-400 font-medium">
            <span className={`w-2 h-2 rounded-full ${isSyncing ? "bg-amber-400 animate-ping" : "bg-emerald-400 animate-pulse"}`} />
            <span>{isSyncing ? "Atlas-এ সেভ হচ্ছে..." : "MongoDB Atlas সিঙ্কড"}</span>
          </div>
        </div>

        {/* Global Toast Notification */}
        {notification && (
          <div className="hidden md:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs animate-in fade-in">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>{notification}</span>
          </div>
        )}

        {/* Right global actions */}
        <div className="flex items-center gap-2">
          
          <Button
            variant="outline"
            size="sm"
            onClick={handleExport}
            className="hidden sm:flex bg-white/[0.04] border-white/10 text-slate-300 hover:text-white text-xs h-8 gap-1.5"
            title="Download JSON configuration backup"
          >
            <Download className="w-3.5 h-3.5 text-cyan-400" />
            <span>Export Backup</span>
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={() => setImportModalOpen(true)}
            className="hidden sm:flex bg-white/[0.04] border-white/10 text-slate-300 hover:text-white text-xs h-8 gap-1.5"
            title="Import configuration JSON"
          >
            <Upload className="w-3.5 h-3.5 text-purple-400" />
            <span>Import JSON</span>
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              if (confirm("Are you sure you want to reset all contents and sections to factory defaults?")) {
                resetToDefaults();
                showNotification("Reset to factory defaults completed!");
              }
            }}
            className="bg-white/[0.04] border-white/10 text-rose-400 hover:bg-rose-500/10 text-xs h-8 gap-1.5"
            title="Restore original preset data"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Reset Defaults</span>
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={handleLogout}
            className="bg-white/[0.04] border-white/10 text-slate-300 hover:bg-rose-500/10 hover:text-rose-400 text-xs h-8 gap-1.5"
            title="Lock Studio and logout"
          >
            <Lock className="w-3.5 h-3.5 text-cyan-400" />
            <span className="hidden md:inline">Lock Studio</span>
          </Button>

          <Link href="/" target="_blank">
            <Button
              size="sm"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 text-slate-950 font-bold text-xs h-8 gap-1.5 shadow-md shadow-cyan-500/20"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Live Website</span>
              <ExternalLink className="w-3 h-3 opacity-70" />
            </Button>
          </Link>
        </div>
      </header>

      {/* Main Studio Body with Sidebar Tabs */}
      <div className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8">
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          
          {/* Navigation Tab Bar */}
          <div className="overflow-x-auto pb-2">
            <TabsList className="bg-white/[0.03] border border-white/10 p-1 rounded-2xl h-auto gap-1">
              <TabsTrigger value="sections" className="text-xs font-semibold px-3 py-2 rounded-xl data-[state=active]:bg-cyan-500 data-[state=active]:text-slate-950">
                <Layers className="w-3.5 h-3.5 mr-1.5" />
                Sections Manager
              </TabsTrigger>
              <TabsTrigger value="hero" className="text-xs font-semibold px-3 py-2 rounded-xl data-[state=active]:bg-cyan-500 data-[state=active]:text-slate-950">
                <Sparkles className="w-3.5 h-3.5 mr-1.5" />
                Hero & Billboard
              </TabsTrigger>
              <TabsTrigger value="services" className="text-xs font-semibold px-3 py-2 rounded-xl data-[state=active]:bg-cyan-500 data-[state=active]:text-slate-950">
                <FileText className="w-3.5 h-3.5 mr-1.5" />
                Services CMS ({data.services.length})
              </TabsTrigger>
              <TabsTrigger value="projects" className="text-xs font-semibold px-3 py-2 rounded-xl data-[state=active]:bg-cyan-500 data-[state=active]:text-slate-950">
                <FolderGit2 className="w-3.5 h-3.5 mr-1.5" />
                Projects Showcase ({data.projects.length})
              </TabsTrigger>
              <TabsTrigger value="pricing" className="text-xs font-semibold px-3 py-2 rounded-xl data-[state=active]:bg-cyan-500 data-[state=active]:text-slate-950">
                <BadgePercent className="w-3.5 h-3.5 mr-1.5" />
                Pricing Plans
              </TabsTrigger>
              <TabsTrigger value="testimonials" className="text-xs font-semibold px-3 py-2 rounded-xl data-[state=active]:bg-cyan-500 data-[state=active]:text-slate-950">
                <MessageSquare className="w-3.5 h-3.5 mr-1.5" />
                Testimonials
              </TabsTrigger>
              <TabsTrigger value="contact" className="text-xs font-semibold px-3 py-2 rounded-xl data-[state=active]:bg-cyan-500 data-[state=active]:text-slate-950">
                <Phone className="w-3.5 h-3.5 mr-1.5" />
                Company & Contact
              </TabsTrigger>
              <TabsTrigger value="theme" className="text-xs font-semibold px-3 py-2 rounded-xl data-[state=active]:bg-cyan-500 data-[state=active]:text-slate-950">
                <Palette className="w-3.5 h-3.5 mr-1.5" />
                Theme & Design
              </TabsTrigger>
              <TabsTrigger value="footer" className="text-xs font-semibold px-3 py-2 rounded-xl data-[state=active]:bg-cyan-500 data-[state=active]:text-slate-950">
                <PanelBottom className="w-3.5 h-3.5 mr-1.5" />
                Footer CMS
              </TabsTrigger>
              <TabsTrigger value="seo" className="text-xs font-semibold px-3 py-2 rounded-xl data-[state=active]:bg-cyan-500 data-[state=active]:text-slate-950">
                <Share2 className="w-3.5 h-3.5 mr-1.5" />
                SEO & OG Image
              </TabsTrigger>
              <TabsTrigger value="security" className="text-xs font-semibold px-3 py-2 rounded-xl data-[state=active]:bg-cyan-500 data-[state=active]:text-slate-950">
                <ShieldCheck className="w-3.5 h-3.5 mr-1.5" />
                Security & Password
              </TabsTrigger>
            </TabsList>
          </div>

          {/* ========================================================================= */}
          {/* TAB 1: SECTIONS MANAGER (Reorder, Toggle, Add Custom Section, Delete)     */}
          {/* ========================================================================= */}
          <TabsContent value="sections" className="space-y-6">
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/10">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/10">
                <div>
                  <h2 className="text-xl font-bold text-white flex items-center gap-2">
                    <Layers className="w-5 h-5 text-cyan-400" />
                    <span>Dynamic Section Architecture</span>
                  </h2>
                  <p className="text-xs text-slate-400 mt-1">
                    Control which sections appear on the homepage, change their display order, or create new custom sections.
                  </p>
                </div>

                <Button
                  onClick={() => setAddSectionOpen(true)}
                  className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs h-9 rounded-xl gap-1.5 shadow-lg shadow-cyan-500/20"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add New Custom Section</span>
                </Button>
              </div>

              {/* Sections List */}
              <div className="space-y-3">
                {sortedSections.map((sec, idx) => (
                  <div
                    key={sec.id}
                    className={`p-4 rounded-2xl border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                      sec.enabled
                        ? "bg-white/[0.03] border-white/10"
                        : "bg-black/40 border-white/5 opacity-50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white/[0.05] border border-white/10 flex items-center justify-center font-mono text-xs font-bold text-cyan-400">
                        {idx + 1}
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-sm text-white">
                            {sec.title}
                          </span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.06] text-slate-400 border border-white/5">
                            type: {sec.type}
                          </span>
                          {sec.id.startsWith("custom-") && (
                            <span className="text-[10px] px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 font-semibold border border-purple-500/30">
                              Custom Section
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-slate-400 mt-0.5">{sec.subtitle}</p>
                      </div>
                    </div>

                    {/* Actions: Reorder, Visibility Toggle, Delete */}
                    <div className="flex items-center gap-2 self-end sm:self-auto">
                      
                      {/* Move Up */}
                      <button
                        disabled={idx === 0}
                        onClick={() => {
                          reorderSection(sec.id, "up");
                          showNotification(`Moved "${sec.title}" Up`);
                        }}
                        className="p-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] disabled:opacity-20 border border-white/5 text-slate-300 hover:text-white"
                        title="Move Up"
                      >
                        <ArrowUp className="w-4 h-4" />
                      </button>

                      {/* Move Down */}
                      <button
                        disabled={idx === sortedSections.length - 1}
                        onClick={() => {
                          reorderSection(sec.id, "down");
                          showNotification(`Moved "${sec.title}" Down`);
                        }}
                        className="p-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] disabled:opacity-20 border border-white/5 text-slate-300 hover:text-white"
                        title="Move Down"
                      >
                        <ArrowDown className="w-4 h-4" />
                      </button>

                      {/* Visibility Switch */}
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.03] border border-white/10 ml-1">
                        <span className="text-[11px] font-semibold text-slate-300">
                          {sec.enabled ? "Active" : "Hidden"}
                        </span>
                        <Switch
                          checked={sec.enabled}
                          onCheckedChange={() => {
                            toggleSection(sec.id);
                            showNotification(
                              `Section "${sec.title}" is now ${
                                sec.enabled ? "hidden" : "visible"
                              }`
                            );
                          }}
                        />
                      </div>

                      {/* Delete Custom Section */}
                      {sec.id.startsWith("custom-") && (
                        <button
                          onClick={() => {
                            if (confirm(`Delete custom section "${sec.title}"?`)) {
                              deleteSection(sec.id);
                              showNotification("Custom section deleted");
                            }
                          }}
                          className="p-2 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/20"
                          title="Delete section"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </TabsContent>

          {/* ========================================================================= */}
          {/* TAB 2: HERO & BILLBOARD CMS                                               */}
          {/* ========================================================================= */}
          <TabsContent value="hero" className="space-y-6">
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/10 space-y-6">
              <div>
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-cyan-400" />
                  <span>Hero Section Billboard Content</span>
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  Edit main headline, gradient highlight, secondary text, badges, and CTA action buttons.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                    Badge Title
                  </label>
                  <Input
                    value={data.hero.badge}
                    onChange={(e) => updateHero({ badge: e.target.value })}
                    className="bg-white/[0.04] border-white/10 text-white text-xs"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                    Badge Highlight Pill
                  </label>
                  <Input
                    value={data.hero.badgeHighlight}
                    onChange={(e) => updateHero({ badgeHighlight: e.target.value })}
                    className="bg-white/[0.04] border-white/10 text-white text-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                    Title Part 1
                  </label>
                  <Input
                    value={data.hero.titlePart1}
                    onChange={(e) => updateHero({ titlePart1: e.target.value })}
                    className="bg-white/[0.04] border-white/10 text-white text-xs"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                    Title Gradient Word(s)
                  </label>
                  <Input
                    value={data.hero.titleGradient}
                    onChange={(e) => updateHero({ titleGradient: e.target.value })}
                    className="bg-white/[0.04] border-white/10 text-cyan-400 font-bold text-xs"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                    Title Part 2
                  </label>
                  <Input
                    value={data.hero.titlePart2}
                    onChange={(e) => updateHero({ titlePart2: e.target.value })}
                    className="bg-white/[0.04] border-white/10 text-white text-xs"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                  Hero Pitch Description
                </label>
                <Textarea
                  rows={3}
                  value={data.hero.description}
                  onChange={(e) => updateHero({ description: e.target.value })}
                  className="bg-white/[0.04] border-white/10 text-white text-xs"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                    Primary CTA Text
                  </label>
                  <Input
                    value={data.hero.primaryCtaText}
                    onChange={(e) => updateHero({ primaryCtaText: e.target.value })}
                    className="bg-white/[0.04] border-white/10 text-white text-xs"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                    Primary CTA Link Target
                  </label>
                  <Input
                    value={data.hero.primaryCtaLink}
                    onChange={(e) => updateHero({ primaryCtaLink: e.target.value })}
                    className="bg-white/[0.04] border-white/10 text-white text-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                    Secondary CTA Text
                  </label>
                  <Input
                    value={data.hero.secondaryCtaText}
                    onChange={(e) => updateHero({ secondaryCtaText: e.target.value })}
                    className="bg-white/[0.04] border-white/10 text-white text-xs"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                    Secondary CTA Link Target
                  </label>
                  <Input
                    value={data.hero.secondaryCtaLink}
                    onChange={(e) => updateHero({ secondaryCtaLink: e.target.value })}
                    className="bg-white/[0.04] border-white/10 text-white text-xs"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                  Highlight Tech Tags (comma separated)
                </label>
                <Input
                  value={data.hero.highlightTags.join(", ")}
                  onChange={(e) =>
                    updateHero({
                      highlightTags: e.target.value.split(",").map((t) => t.trim()).filter(Boolean),
                    })
                  }
                  className="bg-white/[0.04] border-white/10 text-white text-xs font-mono"
                />
              </div>

              <Button
                onClick={() => showNotification("Hero section updated successfully!")}
                className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs h-10 px-6 rounded-xl"
              >
                Save Hero Settings
              </Button>
            </div>
          </TabsContent>

          {/* ========================================================================= */}
          {/* TAB 3: SERVICES CMS                                                       */}
          {/* ========================================================================= */}
          <TabsContent value="services" className="space-y-6">
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/10">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/10">
                <div>
                  <h2 className="text-xl font-bold text-white flex items-center gap-2">
                    <FileText className="w-5 h-5 text-cyan-400" />
                    <span>Manage Engineering Services</span>
                  </h2>
                  <p className="text-xs text-slate-400 mt-1">
                    Add new offerings, update service copy, edit deliverables, or delete existing services.
                  </p>
                </div>

                <Button
                  onClick={() => setAddServiceOpen(true)}
                  className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs h-9 rounded-xl gap-1.5 shadow-lg shadow-cyan-500/20"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add New Service</span>
                </Button>
              </div>

              {/* Service Cards */}
              <div className="space-y-4">
                {data.services.map((srv) => (
                  <div
                    key={srv.id}
                    className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="text-[10px] text-slate-400 uppercase font-bold">Service Title</label>
                          <Input
                            value={srv.title}
                            onChange={(e) => updateService(srv.id, { title: e.target.value })}
                            className="bg-white/[0.04] border-white/10 text-white text-xs h-9 mt-1"
                          />
                        </div>
                        <div>
                          <label className="text-[10px] text-slate-400 uppercase font-bold">Subtitle</label>
                          <Input
                            value={srv.subtitle}
                            onChange={(e) => updateService(srv.id, { subtitle: e.target.value })}
                            className="bg-white/[0.04] border-white/10 text-white text-xs h-9 mt-1"
                          />
                        </div>
                      </div>

                      <button
                        onClick={() => {
                          if (confirm(`Delete service "${srv.title}"?`)) {
                            deleteService(srv.id);
                            showNotification("Service deleted");
                          }
                        }}
                        className="p-2 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/20 mt-4"
                        title="Delete Service"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div>
                      <label className="text-[10px] text-slate-400 uppercase font-bold">Description</label>
                      <Textarea
                        rows={2}
                        value={srv.description}
                        onChange={(e) => updateService(srv.id, { description: e.target.value })}
                        className="bg-white/[0.04] border-white/10 text-white text-xs mt-1"
                      />
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-slate-300">Featured Badge:</span>
                        <Switch
                          checked={srv.featured || false}
                          onCheckedChange={(checked) => updateService(srv.id, { featured: checked })}
                        />
                      </div>

                      <div className="text-[11px] text-slate-400 font-mono">
                        Tags: {srv.tags.join(", ")}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </TabsContent>

          {/* ========================================================================= */}
          {/* TAB 4: PROJECTS / PORTFOLIO CMS                                           */}
          {/* ========================================================================= */}
          <TabsContent value="projects" className="space-y-6">
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/10">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/10">
                <div>
                  <h2 className="text-xl font-bold text-white flex items-center gap-2">
                    <FolderGit2 className="w-5 h-5 text-cyan-400" />
                    <span>Manage Showcase Case Studies</span>
                  </h2>
                  <p className="text-xs text-slate-400 mt-1">
                    Add new projects, update client names, images, metrics, categories, or links.
                  </p>
                </div>

                <Button
                  onClick={() => setAddProjectOpen(true)}
                  className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs h-9 rounded-xl gap-1.5 shadow-lg shadow-cyan-500/20"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add New Case Study</span>
                </Button>
              </div>

              {/* Category Management Block */}
              <div className="mb-8 p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-4">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
                  <div>
                    <h3 className="text-sm font-bold text-white flex items-center gap-2">
                      <Tag className="w-4 h-4 text-cyan-400" />
                      <span>Project Categories ({projectCategories.length})</span>
                    </h3>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      Add, delete, or customize project categories. Changes reflect immediately in website filter tabs.
                    </p>
                  </div>

                  {/* Add Category Form */}
                  <div className="flex items-center gap-2 flex-wrap">
                    <Input
                      placeholder="Category Name (English)"
                      value={newCategoryName}
                      onChange={(e) => setNewCategoryName(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          handleAddCategory();
                        }
                      }}
                      className="bg-white/[0.04] border-white/10 text-white text-xs h-8.5 w-44"
                    />
                    <Input
                      placeholder="বাংলা নাম (ঐচ্ছিক)"
                      value={newCategoryBn}
                      onChange={(e) => setNewCategoryBn(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          handleAddCategory();
                        }
                      }}
                      className="bg-white/[0.04] border-white/10 text-white text-xs h-8.5 w-36"
                    />
                    <Button
                      size="sm"
                      onClick={handleAddCategory}
                      className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs h-8.5 px-3 rounded-lg gap-1 shadow-md shadow-cyan-500/20"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add</span>
                    </Button>
                  </div>
                </div>

                {/* Categories Pills List */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {projectCategories.map((cat) => {
                    const count = data.projects.filter((p) => p.category === cat.id).length;
                    return (
                      <div
                        key={cat.id}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-cyan-500/40 text-xs text-slate-200 transition-colors group"
                      >
                        <span className="font-semibold text-white">{cat.name}</span>
                        {cat.nameBn && (
                          <span className="text-[10px] text-slate-400">({cat.nameBn})</span>
                        )}
                        <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 font-mono">
                          {count}
                        </span>
                        <button
                          onClick={() => handleDeleteCategory(cat.id, cat.name)}
                          className="text-slate-500 hover:text-rose-400 transition-colors p-0.5 rounded ml-0.5"
                          title={`Delete category ${cat.name}`}
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Projects List */}
              <div className="space-y-4">
                {data.projects.map((proj) => (
                  <div
                    key={proj.id}
                    className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-4"
                  >
                    <div className="flex flex-col sm:flex-row gap-4">
                      {/* Project Cover Upload & Preview */}
                      <div className="w-full sm:w-44 shrink-0 flex flex-col gap-2">
                        <div className="relative group rounded-xl overflow-hidden border border-white/15 bg-black/40 aspect-video sm:h-28 w-full">
                          {proj.image ? (
                            <img
                              src={proj.image}
                              alt={proj.title}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full flex flex-col items-center justify-center text-slate-500 text-xs gap-1">
                              <ImageIcon className="w-6 h-6 text-slate-600" />
                              <span>No Cover</span>
                            </div>
                          )}

                          {/* Hover Upload Overlay */}
                          <label 
                            htmlFor={`cover-upload-${proj.id}`}
                            className="absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center cursor-pointer text-white gap-1 p-2 text-center"
                          >
                            <Upload className="w-4 h-4 text-cyan-400" />
                            <span className="text-[10px] font-semibold text-cyan-300">Change Cover</span>
                          </label>
                        </div>

                        {/* Direct Upload Button */}
                        <div className="flex items-center gap-1.5">
                          <label htmlFor={`cover-upload-${proj.id}`} className="flex-1 cursor-pointer">
                            <Button
                              type="button"
                              variant="outline"
                              size="sm"
                              disabled={uploadingProjectId === proj.id}
                              className="w-full h-7 text-[10px] bg-white/[0.04] hover:bg-cyan-500 hover:text-slate-950 border-white/10 text-slate-300 gap-1 pointer-events-none"
                            >
                              {uploadingProjectId === proj.id ? (
                                <>
                                  <Loader2 className="w-3 h-3 animate-spin text-cyan-400" />
                                  <span>Uploading...</span>
                                </>
                              ) : (
                                <>
                                  <Upload className="w-3 h-3 text-cyan-400" />
                                  <span>Upload Cover</span>
                                </>
                              )}
                            </Button>
                          </label>
                          <input
                            id={`cover-upload-${proj.id}`}
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={(e) => handleProjectCoverUpload(proj.id, e)}
                          />
                        </div>

                        {/* Optional URL input */}
                        <Input
                          value={proj.image}
                          onChange={(e) => updateProject(proj.id, { image: e.target.value })}
                          placeholder="Or image URL"
                          className="bg-white/[0.02] border-white/5 text-[10px] text-slate-400 h-6 font-mono px-2"
                        />
                      </div>

                      <div className="flex-1 space-y-3">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          <div>
                            <label className="text-[10px] text-slate-400 uppercase font-bold">Project Title</label>
                            <Input
                              value={proj.title}
                              onChange={(e) => updateProject(proj.id, { title: e.target.value })}
                              className="bg-white/[0.04] border-white/10 text-white text-xs h-9 mt-1"
                            />
                          </div>

                          <div>
                            <label className="text-[10px] text-slate-400 uppercase font-bold">Category</label>
                            <select
                              value={proj.category}
                              onChange={(e) => updateProject(proj.id, { category: e.target.value as any })}
                              className="w-full bg-[#0d1326] border border-white/10 text-white text-xs h-9 px-2 rounded-xl mt-1 focus:border-cyan-400 focus:outline-none"
                            >
                              {projectCategories.map((cat) => (
                                <option key={cat.id} value={cat.id}>
                                  {cat.name} {cat.nameBn ? `(${cat.nameBn})` : ""}
                                </option>
                              ))}
                            </select>
                          </div>

                          <div>
                            <label className="text-[10px] text-slate-400 uppercase font-bold">Client & Location</label>
                            <Input
                              value={proj.client}
                              onChange={(e) => updateProject(proj.id, { client: e.target.value })}
                              className="bg-white/[0.04] border-white/10 text-white text-xs h-9 mt-1"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="text-[10px] text-slate-400 uppercase font-bold">Performance Metric</label>
                          <Input
                            value={proj.metrics}
                            onChange={(e) => updateProject(proj.id, { metrics: e.target.value })}
                            className="bg-white/[0.04] border-white/10 text-cyan-300 font-semibold text-xs h-9 mt-1"
                          />
                        </div>

                        <div>
                          <label className="text-[10px] text-slate-400 uppercase font-bold">Project Summary</label>
                          <Textarea
                            rows={2}
                            value={proj.description}
                            onChange={(e) => updateProject(proj.id, { description: e.target.value })}
                            className="bg-white/[0.04] border-white/10 text-white text-xs mt-1"
                          />
                        </div>
                      </div>

                      <button
                        onClick={() => {
                          if (confirm(`Delete project "${proj.title}"?`)) {
                            deleteProject(proj.id);
                            showNotification("Project deleted");
                          }
                        }}
                        className="p-2 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/20 self-start"
                        title="Delete Project"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </TabsContent>

          {/* ========================================================================= */}
          {/* TAB 5: PRICING PACKAGES CMS                                               */}
          {/* ========================================================================= */}
          <TabsContent value="pricing" className="space-y-6">
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/10 space-y-6">
              <div>
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <BadgePercent className="w-5 h-5 text-cyan-400" />
                  <span>Configure Investment Packages</span>
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  Update BDT and USD prices, descriptions, and feature lists.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {data.pricing.map((plan) => (
                  <div
                    key={plan.id}
                    className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3"
                  >
                    <div>
                      <label className="text-[10px] text-slate-400 uppercase font-bold">Plan Name</label>
                      <Input
                        value={plan.name}
                        onChange={(e) => updatePricing(plan.id, { name: e.target.value })}
                        className="bg-white/[0.04] border-white/10 text-white font-bold text-xs h-9 mt-1"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="text-[10px] text-slate-400 uppercase font-bold">Price (BDT)</label>
                        <Input
                          value={plan.priceBdt}
                          onChange={(e) => updatePricing(plan.id, { priceBdt: e.target.value })}
                          className="bg-white/[0.04] border-white/10 text-cyan-400 font-bold text-xs h-9 mt-1"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] text-slate-400 uppercase font-bold">Price (USD)</label>
                        <Input
                          value={plan.priceUsd}
                          onChange={(e) => updatePricing(plan.id, { priceUsd: e.target.value })}
                          className="bg-white/[0.04] border-white/10 text-white font-bold text-xs h-9 mt-1"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[10px] text-slate-400 uppercase font-bold">Description</label>
                      <Textarea
                        rows={2}
                        value={plan.description}
                        onChange={(e) => updatePricing(plan.id, { description: e.target.value })}
                        className="bg-white/[0.04] border-white/10 text-white text-xs mt-1"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] text-slate-400 uppercase font-bold">
                        Features (one per line)
                      </label>
                      <Textarea
                        rows={5}
                        value={plan.features.join("\n")}
                        onChange={(e) =>
                          updatePricing(plan.id, {
                            features: e.target.value.split("\n").filter(Boolean),
                          })
                        }
                        className="bg-white/[0.04] border-white/10 text-white text-xs mt-1 font-mono"
                      />
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <span className="text-xs text-slate-300">Popular Highlight:</span>
                      <Switch
                        checked={plan.popular || false}
                        onCheckedChange={(checked) => updatePricing(plan.id, { popular: checked })}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <Button
                onClick={() => showNotification("Pricing packages updated!")}
                className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs h-10 px-6 rounded-xl"
              >
                Save Pricing Changes
              </Button>
            </div>
          </TabsContent>

          {/* ========================================================================= */}
          {/* TAB 6: TESTIMONIALS CMS                                                   */}
          {/* ========================================================================= */}
          <TabsContent value="testimonials" className="space-y-6">
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/10 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-xl font-bold text-white flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-cyan-400" />
                    <span>Client Testimonials & Reviews CMS</span>
                  </h2>
                  <p className="text-xs text-slate-400 mt-1">
                    Manage client reviews, client photos, ratings, reaction emojis, designations, and localized content.
                  </p>
                </div>

                <Button
                  onClick={() => setAddTestimonialOpen(true)}
                  className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs h-9 px-4 rounded-xl flex items-center gap-2 shrink-0"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add New Testimonial</span>
                </Button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {data.testimonials.map((test) => (
                  <div
                    key={test.id}
                    className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-4 hover:border-white/20 transition-colors"
                  >
                    {/* Top Row: Client Photo / Avatar & Actions */}
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3 flex-1 min-w-0">
                        {/* Avatar Preview with Hover Upload Overlay */}
                        <div className="relative w-14 h-14 rounded-full overflow-hidden bg-neutral-800 border-2 border-white/15 shrink-0 group">
                          <img
                            src={test.avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"}
                            alt={test.name}
                            className="w-full h-full object-cover"
                          />
                          <label
                            htmlFor={`avatar-upload-${test.id}`}
                            className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center cursor-pointer text-white"
                          >
                            {uploadingTestimonialId === test.id ? (
                              <Loader2 className="w-4 h-4 animate-spin text-cyan-400" />
                            ) : (
                              <Upload className="w-4 h-4 text-cyan-400" />
                            )}
                          </label>
                          <input
                            type="file"
                            id={`avatar-upload-${test.id}`}
                            accept="image/*"
                            className="hidden"
                            onChange={(e) => handleTestimonialAvatarUpload(test.id, e)}
                          />
                        </div>

                        {/* Photo URL & Upload Button */}
                        <div className="flex-1 min-w-0 space-y-1">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] text-slate-400 uppercase font-bold">Client Photo</span>
                            <label
                              htmlFor={`avatar-upload-${test.id}`}
                              className="text-[10px] text-cyan-400 hover:text-cyan-300 font-semibold cursor-pointer flex items-center gap-1"
                            >
                              <Upload className="w-3 h-3" />
                              <span>{uploadingTestimonialId === test.id ? "Uploading..." : "Upload Photo"}</span>
                            </label>
                          </div>
                          <Input
                            placeholder="Image URL..."
                            value={test.avatar}
                            onChange={(e) => updateTestimonial(test.id, { avatar: e.target.value })}
                            className="bg-white/[0.04] border-white/10 text-white text-[11px] h-8"
                          />
                        </div>
                      </div>

                      {/* Delete Testimonial */}
                      <button
                        onClick={() => {
                          if (confirm(`Delete testimonial from "${test.name}"?`)) {
                            deleteTestimonial(test.id);
                            showNotification("Testimonial removed");
                          }
                        }}
                        className="p-2 rounded-lg bg-rose-500/10 text-rose-400 border border-rose-500/20 hover:bg-rose-500/20 transition-colors"
                        title="Delete Review"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Client Identity Fields */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      <div>
                        <label className="text-[10px] text-slate-400 uppercase font-bold">Client Name (English)</label>
                        <Input
                          value={test.name}
                          onChange={(e) => updateTestimonial(test.id, { name: e.target.value })}
                          className="bg-white/[0.04] border-white/10 text-white text-xs h-8 mt-1"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] text-slate-400 uppercase font-bold">Client Name (বাংলা)</label>
                        <Input
                          placeholder="বাংলা নাম (ঐচ্ছিক)"
                          value={test.nameBn || ""}
                          onChange={(e) => updateTestimonial(test.id, { nameBn: e.target.value })}
                          className="bg-white/[0.04] border-white/10 text-white text-xs h-8 mt-1"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                      <div>
                        <label className="text-[10px] text-slate-400 uppercase font-bold">Role / Title</label>
                        <Input
                          placeholder="e.g. CTO / Founder"
                          value={test.role}
                          onChange={(e) => updateTestimonial(test.id, { role: e.target.value })}
                          className="bg-white/[0.04] border-white/10 text-white text-xs h-8 mt-1"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] text-slate-400 uppercase font-bold">Company</label>
                        <Input
                          placeholder="e.g. CarePulse BD"
                          value={test.company || ""}
                          onChange={(e) => updateTestimonial(test.id, { company: e.target.value })}
                          className="bg-white/[0.04] border-white/10 text-white text-xs h-8 mt-1"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] text-slate-400 uppercase font-bold">Location</label>
                        <Input
                          placeholder="e.g. Dhaka, Bangladesh"
                          value={test.location || ""}
                          onChange={(e) => updateTestimonial(test.id, { location: e.target.value })}
                          className="bg-white/[0.04] border-white/10 text-white text-xs h-8 mt-1"
                        />
                      </div>
                    </div>

                    {/* Star Rating & Reaction Emoji */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-2.5 rounded-xl bg-black/40 border border-white/5">
                      <div>
                        <label className="text-[10px] text-slate-400 uppercase font-bold block mb-1">
                          Star Rating ({test.rating || 5}/5)
                        </label>
                        <div className="flex items-center gap-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <button
                              key={star}
                              type="button"
                              onClick={() => updateTestimonial(test.id, { rating: star })}
                              className="p-1 hover:scale-110 transition-transform"
                            >
                              <Star
                                className={`w-4 h-4 ${
                                  star <= (test.rating || 5)
                                    ? "fill-[#F59E0B] text-[#F59E0B]"
                                    : "text-slate-600"
                                }`}
                              />
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="text-[10px] text-slate-400 uppercase font-bold block mb-1">
                          Reaction Badge: <span className="text-white text-sm ml-1">{test.reaction || "❤️"}</span>
                        </label>
                        <div className="flex items-center gap-1.5">
                          {["❤️", "🔥", "🚀", "⚡", "💎"].map((emoji) => (
                            <button
                              key={emoji}
                              type="button"
                              onClick={() => updateTestimonial(test.id, { reaction: emoji })}
                              className={`w-7 h-7 rounded-lg text-xs flex items-center justify-center transition-all ${
                                (test.reaction || "❤️") === emoji
                                  ? "bg-white/20 border border-white/30 scale-105"
                                  : "bg-white/5 hover:bg-white/10"
                              }`}
                            >
                              {emoji}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Review Text: English */}
                    <div>
                      <label className="text-[10px] text-slate-400 uppercase font-bold">Review Text (English)</label>
                      <Textarea
                        rows={3}
                        value={test.content}
                        onChange={(e) => updateTestimonial(test.id, { content: e.target.value })}
                        className="bg-white/[0.04] border-white/10 text-white text-xs mt-1"
                        placeholder="Client testimonial content..."
                      />
                    </div>

                    {/* Review Text: Bengali */}
                    <div>
                      <label className="text-[10px] text-slate-400 uppercase font-bold">Review Text (বাংলা - ঐচ্ছিক)</label>
                      <Textarea
                        rows={2}
                        value={test.contentBn || ""}
                        onChange={(e) => updateTestimonial(test.id, { contentBn: e.target.value })}
                        className="bg-white/[0.04] border-white/10 text-white text-xs mt-1 font-bangla-ui"
                        placeholder="বাংলা রিভিউ টেক্সট..."
                      />
                    </div>
                  </div>
                ))}
              </div>

              <Button
                onClick={() => showNotification("All client testimonials saved!")}
                className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs h-10 px-6 rounded-xl"
              >
                Save All Testimonial Changes
              </Button>
            </div>
          </TabsContent>

          {/* ========================================================================= */}
          {/* TAB 7: COMPANY & CONTACT INFO                                             */}
          {/* ========================================================================= */}
          <TabsContent value="contact" className="space-y-6">
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/10 space-y-6">
              <div>
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <span>Company Headquarters & Channels</span>
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  Update official address in Dhaka, phone, direct WhatsApp integration, and operating hours.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                    Company Name
                  </label>
                  <Input
                    value={data.companyName}
                    onChange={(e) => updateSiteData({ companyName: e.target.value })}
                    className="bg-white/[0.04] border-white/10 text-white text-xs"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                    Agency Tagline
                  </label>
                  <Input
                    value={data.tagline}
                    onChange={(e) => updateSiteData({ tagline: e.target.value })}
                    className="bg-white/[0.04] border-white/10 text-white text-xs"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                  Dhaka Office Physical Address
                </label>
                <Input
                  value={data.contact.address}
                  onChange={(e) => updateContact({ address: e.target.value })}
                  className="bg-white/[0.04] border-white/10 text-white text-xs"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                    Official Email
                  </label>
                  <Input
                    value={data.contact.email}
                    onChange={(e) => updateContact({ email: e.target.value })}
                    className="bg-white/[0.04] border-white/10 text-white text-xs"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                    Direct Phone Call
                  </label>
                  <Input
                    value={data.contact.phone}
                    onChange={(e) => updateContact({ phone: e.target.value })}
                    className="bg-white/[0.04] border-white/10 text-white text-xs"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                    WhatsApp Number
                  </label>
                  <Input
                    value={data.contact.whatsapp}
                    onChange={(e) => updateContact({ whatsapp: e.target.value })}
                    className="bg-white/[0.04] border-white/10 text-emerald-400 font-bold text-xs"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                  Office Operating Hours
                </label>
                <Input
                  value={data.contact.officeHours}
                  onChange={(e) => updateContact({ officeHours: e.target.value })}
                  className="bg-white/[0.04] border-white/10 text-white text-xs"
                />
              </div>

              <Button
                onClick={() => showNotification("Company info updated successfully!")}
                className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs h-10 px-6 rounded-xl"
              >
                Save Contact Information
              </Button>
            </div>
          </TabsContent>

          {/* ========================================================================= */}
          {/* TAB 8: THEME & DESIGN CUSTOMIZER                                          */}
          {/* ========================================================================= */}
          <TabsContent value="theme" className="space-y-6">
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/10 space-y-6">
              <div>
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <Palette className="w-5 h-5 text-cyan-400" />
                  <span>Design System & Aesthetics Studio</span>
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  Change color schemes, particle behavior, and visual accents dynamically across the site.
                </p>
              </div>

              {/* Theme Presets */}
              <div>
                <label className="text-xs font-bold text-slate-300 block mb-3 uppercase tracking-wider">
                  Color Scheme Presets
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { id: "cyber-zen", name: "Cyber Zen", desc: "Neon Cyan & Electric Blue (Default)", color: "#00f2fe" },
                    { id: "emerald-matrix", name: "Emerald Matrix", desc: "Vibrant Mint & Cyber Lime", color: "#10b981" },
                    { id: "solar-flare", name: "Solar Flare", desc: "Sunset Amber & Crimson Neon", color: "#f59e0b" },
                    { id: "aurora-violet", name: "Aurora Violet", desc: "Ultra Violet & Electric Purple", color: "#a855f7" },
                    { id: "obsidian-glow", name: "Obsidian Titanium", desc: "Sleek Chrome & Minimalist White", color: "#ffffff" },
                  ].map((preset) => (
                    <button
                      key={preset.id}
                      onClick={() => {
                        updateTheme({ preset: preset.id as any });
                        showNotification(`Theme preset changed to ${preset.name}`);
                      }}
                      className={`p-4 rounded-2xl border text-left transition-all ${
                        data.theme.preset === preset.id
                          ? "bg-white/[0.08] border-cyan-400 shadow-lg shadow-cyan-500/10 scale-[1.02]"
                          : "bg-white/[0.02] border-white/10 hover:border-white/20"
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <span
                          className="w-3.5 h-3.5 rounded-full"
                          style={{ backgroundColor: preset.color }}
                        />
                        <span className="font-bold text-sm text-white">{preset.name}</span>
                      </div>
                      <p className="text-[11px] text-slate-400 leading-snug">{preset.desc}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Particle Background Toggle */}
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white">Interactive Particle Background</h4>
                  <p className="text-xs text-slate-400">
                    Physics-based floating nodes connecting with glowing lines on 60fps canvas.
                  </p>
                </div>
                <Switch
                  checked={data.theme.enableParticles}
                  onCheckedChange={(checked) => {
                    updateTheme({ enableParticles: checked });
                    showNotification(`Particle background ${checked ? "enabled" : "disabled"}`);
                  }}
                />
              </div>

              {/* Glow Intensity */}
              <div>
                <label className="text-xs font-bold text-slate-300 block mb-2 uppercase tracking-wider">
                  Glow & Blur Intensity
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {(["subtle", "medium", "high"] as const).map((level) => (
                    <button
                      key={level}
                      onClick={() => updateTheme({ glowIntensity: level })}
                      className={`py-2.5 rounded-xl border text-xs font-semibold capitalize transition-all ${
                        data.theme.glowIntensity === level
                          ? "bg-cyan-500 text-slate-950 font-bold border-cyan-400"
                          : "bg-white/[0.02] border-white/10 text-slate-300"
                      }`}
                    >
                      {level}
                    </button>
                  ))}
                </div>
              </div>

            </div>
          </TabsContent>

          {/* ========================================================================= */}
          {/* TAB: FOOTER & BOTTOM NAVIGATION CMS                                       */}
          {/* ========================================================================= */}
          <TabsContent value="footer" className="space-y-6">
            
            {/* 1. Brand Bio & Live Status */}
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/10 space-y-6">
              <div>
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <PanelBottom className="w-5 h-5 text-cyan-400" />
                  <span>Footer Brand Bio & Live Status</span>
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  Manage the introductory agency bio, location badge, and live project availability status shown in the footer.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                    Location Badge (Dhaka / Bangladesh)
                  </label>
                  <Input
                    value={data.footer?.locationBadge ?? "Dhaka"}
                    onChange={(e) => updateFooter({ locationBadge: e.target.value })}
                    placeholder="e.g. Dhaka"
                    className="bg-white/[0.04] border-white/10 text-white text-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                    Agency Footer Bio (English)
                  </label>
                  <Textarea
                    rows={3}
                    value={data.footer?.bio ?? ""}
                    onChange={(e) => updateFooter({ bio: e.target.value })}
                    placeholder="English bio text in footer..."
                    className="bg-white/[0.04] border-white/10 text-white text-xs resize-none"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                    Agency Footer Bio (বাংলা)
                  </label>
                  <Textarea
                    rows={3}
                    value={data.footer?.bioBn ?? ""}
                    onChange={(e) => updateFooter({ bioBn: e.target.value })}
                    placeholder="বাংলা বিবরণ..."
                    className="bg-white/[0.04] border-white/10 text-white text-xs resize-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                    Live Status Badge (English)
                  </label>
                  <Input
                    value={data.footer?.statusText ?? ""}
                    onChange={(e) => updateFooter({ statusText: e.target.value })}
                    placeholder="e.g. Ready for new projects — Accepting client bookings"
                    className="bg-white/[0.04] border-white/10 text-white text-xs"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                    Live Status Badge (বাংলা)
                  </label>
                  <Input
                    value={data.footer?.statusTextBn ?? ""}
                    onChange={(e) => updateFooter({ statusTextBn: e.target.value })}
                    placeholder="যেমন: নতুন প্রজেক্টের জন্য উন্মুক্ত — বুকিং নেওয়া হচ্ছে"
                    className="bg-white/[0.04] border-white/10 text-white text-xs"
                  />
                </div>
              </div>
            </div>

            {/* 2. Quick Navigation Links (Add, Delete, Edit) */}
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/10 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <span>Quick Navigation Links</span>
                    <Badge variant="outline" className="bg-cyan-500/10 text-cyan-400 border-cyan-500/20 text-[10px]">
                      {footerNavLinks.length} Links
                    </Badge>
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Add new navigation anchors/pages, update titles in both languages, or remove unwanted links.
                  </p>
                </div>
              </div>

              {/* Navigation Titles */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                    Section Header (English)
                  </label>
                  <Input
                    value={data.footer?.navLinksTitle ?? "Quick Navigation"}
                    onChange={(e) => updateFooter({ navLinksTitle: e.target.value })}
                    className="bg-white/[0.04] border-white/10 text-white text-xs"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                    Section Header (বাংলা)
                  </label>
                  <Input
                    value={data.footer?.navLinksTitleBn ?? "দ্রুত নেভিগেশন"}
                    onChange={(e) => updateFooter({ navLinksTitleBn: e.target.value })}
                    className="bg-white/[0.04] border-white/10 text-white text-xs"
                  />
                </div>
              </div>

              {/* Add New Nav Link Form */}
              <div className="p-4 rounded-2xl bg-cyan-500/[0.03] border border-cyan-500/20 space-y-3">
                <span className="text-xs font-bold text-cyan-400 flex items-center gap-1.5">
                  <Plus className="w-4 h-4" /> Add New Navigation Link (নতুন লিংক যোগ করুন)
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="text-[11px] font-medium text-slate-300 block mb-1">
                      Label (English) *
                    </label>
                    <Input
                      value={newNavLink.label}
                      onChange={(e) => setNewNavLink({ ...newNavLink, label: e.target.value })}
                      placeholder="e.g. Portfolio"
                      className="bg-white/[0.04] border-white/10 text-white text-xs"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-medium text-slate-300 block mb-1">
                      Label (বাংলা)
                    </label>
                    <Input
                      value={newNavLink.labelBn}
                      onChange={(e) => setNewNavLink({ ...newNavLink, labelBn: e.target.value })}
                      placeholder="যেমন: পোর্টফোলিও"
                      className="bg-white/[0.04] border-white/10 text-white text-xs"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-medium text-slate-300 block mb-1">
                      Target URL / Anchor *
                    </label>
                    <div className="flex gap-2">
                      <Input
                        value={newNavLink.url}
                        onChange={(e) => setNewNavLink({ ...newNavLink, url: e.target.value })}
                        placeholder="#projects or /contact"
                        className="bg-white/[0.04] border-white/10 text-white text-xs flex-1"
                      />
                      <Button
                        type="button"
                        onClick={handleAddFooterNavLink}
                        className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs h-9 px-4 shrink-0"
                      >
                        <Plus className="w-3.5 h-3.5 mr-1" /> Add
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Current Nav Links List */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-300 block">
                  Current Links (সরাসরি এডিট ও ডিলিট করুন):
                </label>
                {footerNavLinks.map((item, idx) => (
                  <div
                    key={item.id || idx}
                    className="p-3 rounded-xl bg-white/[0.02] border border-white/10 flex flex-col md:flex-row items-center gap-3"
                  >
                    <div className="w-6 text-center text-xs font-bold text-cyan-400/70 shrink-0">
                      #{idx + 1}
                    </div>
                    <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-2 w-full">
                      <div>
                        <span className="text-[10px] text-slate-400 block mb-0.5">English</span>
                        <Input
                          value={item.label}
                          onChange={(e) => handleUpdateFooterNavLink(item.id, { label: e.target.value })}
                          className="bg-white/[0.04] border-white/10 text-white text-xs h-8"
                        />
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-400 block mb-0.5">বাংলা</span>
                        <Input
                          value={item.labelBn || ""}
                          onChange={(e) => handleUpdateFooterNavLink(item.id, { labelBn: e.target.value })}
                          placeholder="বাংলা নাম..."
                          className="bg-white/[0.04] border-white/10 text-white text-xs h-8"
                        />
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-400 block mb-0.5">URL / Anchor</span>
                        <Input
                          value={item.url}
                          onChange={(e) => handleUpdateFooterNavLink(item.id, { url: e.target.value })}
                          className="bg-white/[0.04] border-white/10 text-cyan-300 text-xs h-8"
                        />
                      </div>
                    </div>
                    <Button
                      type="button"
                      size="sm"
                      variant="ghost"
                      onClick={() => handleDeleteFooterNavLink(item.id, item.label)}
                      className="text-red-400 hover:text-red-300 hover:bg-red-500/10 h-8 px-2.5 shrink-0 self-end md:self-center"
                      title="Delete link"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Core Solutions Links (Add, Delete, Edit) */}
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/10 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <span>Core Solutions & Tags</span>
                    <Badge variant="outline" className="bg-cyan-500/10 text-cyan-400 border-cyan-500/20 text-[10px]">
                      {footerSolutionsLinks.length} Items
                    </Badge>
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Manage service offerings and special solutions listed in column 4 of the footer.
                  </p>
                </div>
              </div>

              {/* Solutions Title */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                    Solutions Column Header (English)
                  </label>
                  <Input
                    value={data.footer?.solutionsTitle ?? "Core Solutions"}
                    onChange={(e) => updateFooter({ solutionsTitle: e.target.value })}
                    className="bg-white/[0.04] border-white/10 text-white text-xs"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                    Solutions Column Header (বাংলা)
                  </label>
                  <Input
                    value={data.footer?.solutionsTitleBn ?? "স্পেশাল সল্যুশনস"}
                    onChange={(e) => updateFooter({ solutionsTitleBn: e.target.value })}
                    className="bg-white/[0.04] border-white/10 text-white text-xs"
                  />
                </div>
              </div>

              {/* Add New Solution Link Form */}
              <div className="p-4 rounded-2xl bg-cyan-500/[0.03] border border-cyan-500/20 space-y-3">
                <span className="text-xs font-bold text-cyan-400 flex items-center gap-1.5">
                  <Plus className="w-4 h-4" /> Add New Solution Item (নতুন সল্যুশন যোগ করুন)
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="text-[11px] font-medium text-slate-300 block mb-1">
                      Title (English) *
                    </label>
                    <Input
                      value={newSolLink.label}
                      onChange={(e) => setNewSolLink({ ...newSolLink, label: e.target.value })}
                      placeholder="e.g. AI Automation & Agents"
                      className="bg-white/[0.04] border-white/10 text-white text-xs"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-medium text-slate-300 block mb-1">
                      Title (বাংলা)
                    </label>
                    <Input
                      value={newSolLink.labelBn}
                      onChange={(e) => setNewSolLink({ ...newSolLink, labelBn: e.target.value })}
                      placeholder="যেমন: AI অটোমেশন ও চ্যাটবট"
                      className="bg-white/[0.04] border-white/10 text-white text-xs"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-medium text-slate-300 block mb-1">
                      Target Link / Anchor *
                    </label>
                    <div className="flex gap-2">
                      <Input
                        value={newSolLink.url}
                        onChange={(e) => setNewSolLink({ ...newSolLink, url: e.target.value })}
                        placeholder="#services"
                        className="bg-white/[0.04] border-white/10 text-white text-xs flex-1"
                      />
                      <Button
                        type="button"
                        onClick={handleAddFooterSolLink}
                        className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs h-9 px-4 shrink-0"
                      >
                        <Plus className="w-3.5 h-3.5 mr-1" /> Add
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Current Solution Links List */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-300 block">
                  Current Solutions (সরাসরি এডিট ও ডিলিট করুন):
                </label>
                {footerSolutionsLinks.map((item, idx) => (
                  <div
                    key={item.id || idx}
                    className="p-3 rounded-xl bg-white/[0.02] border border-white/10 flex flex-col md:flex-row items-center gap-3"
                  >
                    <div className="w-6 text-center text-xs font-bold text-cyan-400/70 shrink-0">
                      #{idx + 1}
                    </div>
                    <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-2 w-full">
                      <div>
                        <span className="text-[10px] text-slate-400 block mb-0.5">English</span>
                        <Input
                          value={item.label}
                          onChange={(e) => handleUpdateFooterSolLink(item.id, { label: e.target.value })}
                          className="bg-white/[0.04] border-white/10 text-white text-xs h-8"
                        />
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-400 block mb-0.5">বাংলা</span>
                        <Input
                          value={item.labelBn || ""}
                          onChange={(e) => handleUpdateFooterSolLink(item.id, { labelBn: e.target.value })}
                          placeholder="বাংলা নাম..."
                          className="bg-white/[0.04] border-white/10 text-white text-xs h-8"
                        />
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-400 block mb-0.5">URL / Anchor</span>
                        <Input
                          value={item.url}
                          onChange={(e) => handleUpdateFooterSolLink(item.id, { url: e.target.value })}
                          className="bg-white/[0.04] border-white/10 text-cyan-300 text-xs h-8"
                        />
                      </div>
                    </div>
                    <Button
                      type="button"
                      size="sm"
                      variant="ghost"
                      onClick={() => handleDeleteFooterSolLink(item.id, item.label)}
                      className="text-red-400 hover:text-red-300 hover:bg-red-500/10 h-8 px-2.5 shrink-0 self-end md:self-center"
                      title="Delete solution link"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. Direct Consultation & WhatsApp Assistance Box */}
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/10 space-y-6">
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <span>Customer Assistance & Direct WhatsApp Box</span>
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Configure the consultation prompt in column 5 of the footer. WhatsApp number is linked from Company & Contact settings.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                    Assistance Header (English)
                  </label>
                  <Input
                    value={data.footer?.helpTitle ?? ""}
                    onChange={(e) => updateFooter({ helpTitle: e.target.value })}
                    placeholder="e.g. Direct Consultation"
                    className="bg-white/[0.04] border-white/10 text-white text-xs"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                    Assistance Header (বাংলা)
                  </label>
                  <Input
                    value={data.footer?.helpTitleBn ?? ""}
                    onChange={(e) => updateFooter({ helpTitleBn: e.target.value })}
                    placeholder="যেমন: সরাসরি পরামর্শ"
                    className="bg-white/[0.04] border-white/10 text-white text-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                    Assistance Description (English)
                  </label>
                  <Textarea
                    rows={2}
                    value={data.footer?.helpDesc ?? ""}
                    onChange={(e) => updateFooter({ helpDesc: e.target.value })}
                    placeholder="Assistance description..."
                    className="bg-white/[0.04] border-white/10 text-white text-xs resize-none"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                    Assistance Description (বাংলা)
                  </label>
                  <Textarea
                    rows={2}
                    value={data.footer?.helpDescBn ?? ""}
                    onChange={(e) => updateFooter({ helpDescBn: e.target.value })}
                    placeholder="বাংলায় সহায়তা বিবরণ..."
                    className="bg-white/[0.04] border-white/10 text-white text-xs resize-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                    Button Label (English)
                  </label>
                  <Input
                    value={data.footer?.helpButtonText ?? ""}
                    onChange={(e) => updateFooter({ helpButtonText: e.target.value })}
                    placeholder="e.g. Chat on WhatsApp"
                    className="bg-white/[0.04] border-white/10 text-white text-xs"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                    Button Label (বাংলা)
                  </label>
                  <Input
                    value={data.footer?.helpButtonTextBn ?? ""}
                    onChange={(e) => updateFooter({ helpButtonTextBn: e.target.value })}
                    placeholder="যেমন: হোয়াটসঅ্যাপে চ্যাট"
                    className="bg-white/[0.04] border-white/10 text-white text-xs"
                  />
                </div>
              </div>
            </div>

            {/* 5. Bottom Copyright & Location Line */}
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/10 space-y-6">
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <span>Bottom Bar & Legal Notice</span>
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Configure copyright line and Dhaka office location shown at the very bottom bar.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                    Copyright Notice (English)
                  </label>
                  <Input
                    value={data.footer?.copyrightText ?? "All rights reserved."}
                    onChange={(e) => updateFooter({ copyrightText: e.target.value })}
                    placeholder="All rights reserved."
                    className="bg-white/[0.04] border-white/10 text-white text-xs"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                    Copyright Notice (বাংলা)
                  </label>
                  <Input
                    value={data.footer?.copyrightTextBn ?? "সর্বস্বত্ব সংরক্ষিত।"}
                    onChange={(e) => updateFooter({ copyrightTextBn: e.target.value })}
                    placeholder="সর্বস্বত্ব সংরক্ষিত।"
                    className="bg-white/[0.04] border-white/10 text-white text-xs"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                  Bottom Physical Address Text
                </label>
                <Input
                  value={data.footer?.bottomLocationText ?? "Gulshan-2, Dhaka, Bangladesh"}
                  onChange={(e) => updateFooter({ bottomLocationText: e.target.value })}
                  placeholder="e.g. Gulshan-2, Dhaka, Bangladesh"
                  className="bg-white/[0.04] border-white/10 text-white text-xs"
                />
              </div>
            </div>

          </TabsContent>

          {/* ========================================================================= */}
          {/* TAB: SEO & SOCIAL SHARE (OG IMAGE)                                        */}
          {/* ========================================================================= */}
          <TabsContent value="seo" className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/10">
              <div>
                <h2 className="text-lg font-bold text-white flex items-center gap-2">
                  <Share2 className="w-5 h-5 text-cyan-400" />
                  <span>SEO & Social OpenGraph Settings</span>
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  Facebook, WhatsApp, LinkedIn ও Twitter-এ লিংক শেয়ার করলে যে ছবি ও মেটা ডাটা প্রদর্শিত হবে তা এখান থেকে কাস্টমাইজ করুন।
                </p>
              </div>
              <Badge variant="outline" className="border-cyan-500/30 text-cyan-400 bg-cyan-500/10 w-fit">
                1200 x 630 Standard
              </Badge>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Left Column: Live Social Card Simulator */}
              <div className="lg:col-span-5 space-y-4">
                <div className="glass-card rounded-2xl p-5 border border-white/10 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                      <Eye className="w-3.5 h-3.5 text-cyan-400" />
                      Social Share Preview
                    </span>
                    <span className="text-[10px] text-slate-400">FB / WhatsApp / LinkedIn</span>
                  </div>

                  {/* Simulated Social Card */}
                  <div className="rounded-xl overflow-hidden border border-white/15 bg-[#090d1c] shadow-2xl">
                    <div className="relative aspect-[1200/630] w-full bg-slate-900 overflow-hidden">
                      <img
                        src={data.seo?.ogImage || "/og-image.jpg"}
                        alt="OpenGraph Preview"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = "/og-image.jpg";
                        }}
                      />
                      <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/60 backdrop-blur-md text-[10px] text-slate-300 font-mono">
                        1200 × 630
                      </div>
                    </div>
                    <div className="p-3.5 space-y-1.5 bg-[#0e1326] border-t border-white/10">
                      <p className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 font-semibold">
                        webzen.com.bd
                      </p>
                      <h4 className="text-xs font-bold text-white line-clamp-1">
                        {data.seo?.metaTitle || "WebZen Bangladesh | Premier Digital Engineering & Software Solutions"}
                      </h4>
                      <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">
                        {data.seo?.metaDescription || "WebZen Bangladesh is a premier digital engineering agency crafting ultra-fast web platforms, e-commerce, mobile apps, and business automation."}
                      </p>
                    </div>
                  </div>

                  <p className="text-[11px] text-slate-400 text-center">
                    মেসেঞ্জার, হোয়াটসঅ্যাপ বা সোশ্যাল মিডিয়ায় আপনার ওয়েবসাইটের লিংক দিলে ঠিক এভাবে প্রিভিউ হবে।
                  </p>
                </div>
              </div>

              {/* Right Column: Controls & Upload */}
              <div className="lg:col-span-7 space-y-5">
                
                {/* OG Image Upload Card */}
                <div className="glass-card rounded-2xl p-5 border border-white/10 space-y-4">
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <ImageIcon className="w-4 h-4 text-cyan-400" />
                    <span>OpenGraph ব্যানার ইমেজ পরিবর্তন</span>
                  </h3>

                  <div className="space-y-3">
                    <div>
                      <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                        সরাসরি নতুন ইমেজ ফাইল আপলোড করুন (1200x630 বা 16:9 রিকমেন্ডেড)
                      </label>
                      <div className="flex flex-wrap items-center gap-3">
                        <label className="relative inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs cursor-pointer shadow-lg shadow-cyan-500/20 transition-all">
                          {ogUploading ? (
                            <>
                              <Loader2 className="w-4 h-4 animate-spin" />
                              <span>আপলোড হচ্ছে...</span>
                            </>
                          ) : (
                            <>
                              <Upload className="w-4 h-4" />
                              <span>ছবি আপলোড করুন</span>
                            </>
                          )}
                          <input
                            type="file"
                            accept="image/*"
                            disabled={ogUploading}
                            onChange={handleOgImageUpload}
                            className="sr-only"
                          />
                        </label>

                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            updateSeo({ ogImage: "/og-image.jpg" });
                            showNotification("Default OG Banner restored!");
                          }}
                          className="bg-white/[0.04] border-white/10 text-slate-300 hover:text-white text-xs h-10"
                        >
                          <RotateCcw className="w-3.5 h-3.5 mr-1 text-cyan-400" />
                          ডিফল্ট ব্যানার ব্যবহার করুন
                        </Button>
                      </div>
                    </div>

                    <div className="pt-2">
                      <label className="text-xs font-semibold text-slate-300 block mb-1">
                        অথবা ইমেজের সরাসরি URL দিন (Cloudinary / S3 / External Link)
                      </label>
                      <Input
                        value={data.seo?.ogImage || ""}
                        onChange={(e) => updateSeo({ ogImage: e.target.value })}
                        placeholder="/og-image.jpg অথবা https://..."
                        className="bg-white/[0.04] border-white/10 text-white text-xs font-mono"
                      />
                    </div>
                  </div>
                </div>

                {/* Meta Tags Card */}
                <div className="glass-card rounded-2xl p-5 border border-white/10 space-y-4">
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <Globe className="w-4 h-4 text-purple-400" />
                    <span>সার্চ ইঞ্জিন ও মেটা ট্যাগ সেটিংস</span>
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <label className="text-xs font-semibold text-slate-300">
                          Meta Title (SEO শিরোনাম)
                        </label>
                        <span className="text-[10px] text-slate-400">
                          {(data.seo?.metaTitle || "").length} / 60 অক্ষর
                        </span>
                      </div>
                      <Input
                        value={data.seo?.metaTitle || ""}
                        onChange={(e) => updateSeo({ metaTitle: e.target.value })}
                        placeholder="WebZen Bangladesh | Premier Digital Engineering & Software Solutions"
                        className="bg-white/[0.04] border-white/10 text-white text-xs"
                      />
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <label className="text-xs font-semibold text-slate-300">
                          Meta Description (গুগল সার্চ ও সোশ্যাল সামারি)
                        </label>
                        <span className="text-[10px] text-slate-400">
                          {(data.seo?.metaDescription || "").length} / 160 অক্ষর
                        </span>
                      </div>
                      <Textarea
                        rows={3}
                        value={data.seo?.metaDescription || ""}
                        onChange={(e) => updateSeo({ metaDescription: e.target.value })}
                        placeholder="WebZen Bangladesh is a premier digital engineering agency crafting ultra-fast web platforms..."
                        className="bg-white/[0.04] border-white/10 text-white text-xs leading-relaxed"
                      />
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </TabsContent>

          {/* ========================================================================= */}
          {/* TAB 9: SECURITY & PASSWORD SETTINGS                                      */}
          {/* ========================================================================= */}
          <TabsContent value="security" className="space-y-6">
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/10 space-y-6 max-w-2xl">
              <div>
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-cyan-400" />
                  <span>Admin Studio Security & Password</span>
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  Change your master studio password and manage authentication gate protection.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <Lock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">Password Protection Active</h4>
                    <p className="text-[11px] text-emerald-300">Admin Studio is protected by master password.</p>
                  </div>
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={handleLogout}
                  className="bg-emerald-500/20 border-emerald-500/30 text-emerald-300 text-xs h-8"
                >
                  Lock Studio
                </Button>
              </div>

              <form onSubmit={handleChangePassword} className="space-y-4 pt-2">
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                    Current Master Password *
                  </label>
                  <Input
                    required
                    type="password"
                    value={currentPassInput}
                    onChange={(e) => setCurrentPassInput(e.target.value)}
                    placeholder="Enter current password..."
                    className="bg-white/[0.04] border-white/10 text-white text-xs h-10"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                      New Master Password *
                    </label>
                    <Input
                      required
                      type="password"
                      value={newPassInput}
                      onChange={(e) => setNewPassInput(e.target.value)}
                      placeholder="At least 6 characters..."
                      className="bg-white/[0.04] border-white/10 text-white text-xs h-10"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                      Confirm New Password *
                    </label>
                    <Input
                      required
                      type="password"
                      value={confirmPassInput}
                      onChange={(e) => setConfirmPassInput(e.target.value)}
                      placeholder="Repeat new password..."
                      className="bg-white/[0.04] border-white/10 text-white text-xs h-10"
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs h-10 px-6 rounded-xl mt-2"
                >
                  Update Master Password
                </Button>
              </form>
            </div>
          </TabsContent>

        </Tabs>

      </div>

      {/* ========================================================================= */}
      {/* MODAL: ADD CUSTOM SECTION                                                 */}
      {/* ========================================================================= */}
      <Dialog open={addSectionOpen} onOpenChange={setAddSectionOpen}>
        <DialogContent className="bg-[#090d1c] border-white/15 text-white max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-lg font-bold text-white flex items-center gap-2">
              <Plus className="w-5 h-5 text-cyan-400" />
              <span>Create New Custom Section</span>
            </DialogTitle>
            <DialogDescription className="text-xs text-slate-400">
              Add a brand new section to your front-end that you can reposition, style, and edit anytime.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-2">
            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">
                Section Title (Internal identifier & navigation) *
              </label>
              <Input
                required
                value={newSectionData.title}
                onChange={(e) => setNewSectionData({ ...newSectionData, title: e.target.value })}
                placeholder="e.g. Special Eid Campaign or AI Enterprise Launch"
                className="bg-white/[0.04] border-white/10 text-white text-xs"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">
                Badge / Subtitle
              </label>
              <Input
                value={newSectionData.subtitle}
                onChange={(e) => setNewSectionData({ ...newSectionData, subtitle: e.target.value })}
                placeholder="e.g. Exclusive Limited Partnership"
                className="bg-white/[0.04] border-white/10 text-white text-xs"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">
                Headline Text
              </label>
              <Input
                value={newSectionData.heading}
                onChange={(e) => setNewSectionData({ ...newSectionData, heading: e.target.value })}
                placeholder="e.g. Accelerate Your Enterprise with WebZen Cloud"
                className="bg-white/[0.04] border-white/10 text-white text-xs"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">
                Body Content
              </label>
              <Textarea
                rows={3}
                value={newSectionData.body}
                onChange={(e) => setNewSectionData({ ...newSectionData, body: e.target.value })}
                placeholder="Write your custom copy here..."
                className="bg-white/[0.04] border-white/10 text-white text-xs"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">
                  Button Text (Optional)
                </label>
                <Input
                  value={newSectionData.buttonText}
                  onChange={(e) => setNewSectionData({ ...newSectionData, buttonText: e.target.value })}
                  placeholder="e.g. Claim Early Access"
                  className="bg-white/[0.04] border-white/10 text-white text-xs"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">
                  Button Link Target
                </label>
                <Input
                  value={newSectionData.buttonLink}
                  onChange={(e) => setNewSectionData({ ...newSectionData, buttonLink: e.target.value })}
                  placeholder="e.g. #contact"
                  className="bg-white/[0.04] border-white/10 text-white text-xs"
                />
              </div>
            </div>
          </div>

          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setAddSectionOpen(false)}
              className="border-white/10 text-slate-300 text-xs"
            >
              Cancel
            </Button>
            <Button
              onClick={handleAddCustomSection}
              className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs"
            >
              Add Section to Website
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* ========================================================================= */}
      {/* MODAL: ADD NEW SERVICE                                                    */}
      {/* ========================================================================= */}
      <Dialog open={addServiceOpen} onOpenChange={setAddServiceOpen}>
        <DialogContent className="bg-[#090d1c] border-white/15 text-white max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-lg font-bold text-white flex items-center gap-2">
              <Plus className="w-5 h-5 text-cyan-400" />
              <span>Add New Service Offering</span>
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-4 py-2">
            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">Service Title *</label>
              <Input
                required
                value={newServiceData.title}
                onChange={(e) => setNewServiceData({ ...newServiceData, title: e.target.value })}
                placeholder="e.g. Smart Contract & Web3 Audit"
                className="bg-white/[0.04] border-white/10 text-white text-xs"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">Subtitle</label>
              <Input
                value={newServiceData.subtitle}
                onChange={(e) => setNewServiceData({ ...newServiceData, subtitle: e.target.value })}
                placeholder="e.g. Bulletproof decentralized protocols"
                className="bg-white/[0.04] border-white/10 text-white text-xs"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">Description</label>
              <Textarea
                rows={3}
                value={newServiceData.description}
                onChange={(e) => setNewServiceData({ ...newServiceData, description: e.target.value })}
                placeholder="Describe this service offering..."
                className="bg-white/[0.04] border-white/10 text-white text-xs"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">Tags (comma separated)</label>
              <Input
                value={newServiceData.tags.join(", ")}
                onChange={(e) =>
                  setNewServiceData({
                    ...newServiceData,
                    tags: e.target.value.split(",").map((s) => s.trim()).filter(Boolean),
                  })
                }
                className="bg-white/[0.04] border-white/10 text-white text-xs font-mono"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">
                Deliverables (comma separated)
              </label>
              <Input
                value={newServiceData.deliverables.join(", ")}
                onChange={(e) =>
                  setNewServiceData({
                    ...newServiceData,
                    deliverables: e.target.value.split(",").map((s) => s.trim()).filter(Boolean),
                  })
                }
                className="bg-white/[0.04] border-white/10 text-white text-xs font-mono"
              />
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setAddServiceOpen(false)} className="border-white/10 text-xs">
              Cancel
            </Button>
            <Button onClick={handleCreateService} className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs">
              Create Service
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* ========================================================================= */}
      {/* MODAL: ADD NEW PROJECT                                                    */}
      {/* ========================================================================= */}
      <Dialog open={addProjectOpen} onOpenChange={setAddProjectOpen}>
        <DialogContent className="bg-[#090d1c] border-white/15 text-white max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-lg font-bold text-white flex items-center gap-2">
              <Plus className="w-5 h-5 text-cyan-400" />
              <span>Add New Case Study Project</span>
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-4 py-2">
            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">Project Name *</label>
              <Input
                required
                value={newProjectData.title}
                onChange={(e) => setNewProjectData({ ...newProjectData, title: e.target.value })}
                placeholder="e.g. PayZen FinTech App"
                className="bg-white/[0.04] border-white/10 text-white text-xs"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">Category</label>
                <select
                  value={newProjectData.category}
                  onChange={(e) => setNewProjectData({ ...newProjectData, category: e.target.value as any })}
                  className="w-full bg-[#0d1326] border border-white/10 text-white text-xs h-9 px-2 rounded-xl focus:border-cyan-400 focus:outline-none"
                >
                  {projectCategories.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.name} {cat.nameBn ? `(${cat.nameBn})` : ""}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">Client Name</label>
                <Input
                  value={newProjectData.client}
                  onChange={(e) => setNewProjectData({ ...newProjectData, client: e.target.value })}
                  placeholder="e.g. ZenPay Inc."
                  className="bg-white/[0.04] border-white/10 text-white text-xs"
                />
              </div>
            </div>

            {/* Project Cover Upload in Modal */}
            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                Project Cover Image
              </label>
              
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/10 space-y-2.5">
                <div className="flex items-center gap-3">
                  {newProjectData.image ? (
                    <div className="relative w-28 h-18 rounded-xl overflow-hidden border border-white/15 bg-black/40 shrink-0">
                      <img
                        src={newProjectData.image}
                        alt="Preview"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-28 h-18 rounded-xl border border-dashed border-white/20 bg-white/[0.02] flex flex-col items-center justify-center text-slate-500 text-[10px] shrink-0">
                      <ImageIcon className="w-4 h-4 text-slate-600 mb-0.5" />
                      <span>No cover</span>
                    </div>
                  )}

                  <div className="flex-1 space-y-1">
                    <label htmlFor="modal-project-cover-upload" className="cursor-pointer inline-block">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/30 text-xs font-semibold transition-all">
                        {modalUploading ? (
                          <>
                            <Loader2 className="w-3.5 h-3.5 animate-spin text-cyan-400" />
                            <span>Uploading file...</span>
                          </>
                        ) : (
                          <>
                            <Upload className="w-3.5 h-3.5 text-cyan-400" />
                            <span>Upload Cover File</span>
                          </>
                        )}
                      </div>
                    </label>
                    <input
                      id="modal-project-cover-upload"
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleNewProjectCoverUpload}
                    />
                    <p className="text-[10px] text-slate-400">
                      Choose an image from your computer (auto-saved to /uploads).
                    </p>
                  </div>
                </div>

                <div>
                  <Input
                    value={newProjectData.image}
                    onChange={(e) => setNewProjectData({ ...newProjectData, image: e.target.value })}
                    placeholder="Or enter image URL (e.g. /uploads/... or https://...)"
                    className="bg-white/[0.04] border-white/10 text-white text-xs font-mono h-8"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">Key Performance Metric</label>
              <Input
                value={newProjectData.metrics}
                onChange={(e) => setNewProjectData({ ...newProjectData, metrics: e.target.value })}
                placeholder="e.g. 400% Faster Checkout & Zero Errors"
                className="bg-white/[0.04] border-white/10 text-cyan-300 text-xs"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">Project Summary</label>
              <Textarea
                rows={3}
                value={newProjectData.description}
                onChange={(e) => setNewProjectData({ ...newProjectData, description: e.target.value })}
                placeholder="Describe project achievements..."
                className="bg-white/[0.04] border-white/10 text-white text-xs"
              />
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setAddProjectOpen(false)} className="border-white/10 text-xs">
              Cancel
            </Button>
            <Button onClick={handleCreateProject} className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs">
              Save Project
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* ========================================================================= */}
      {/* MODAL: IMPORT CONFIGURATION JSON                                          */}
      {/* ========================================================================= */}
      <Dialog open={importModalOpen} onOpenChange={setImportModalOpen}>
        <DialogContent className="bg-[#090d1c] border-white/15 text-white max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-lg font-bold text-white flex items-center gap-2">
              <Upload className="w-5 h-5 text-purple-400" />
              <span>Import Configuration JSON</span>
            </DialogTitle>
            <DialogDescription className="text-xs text-slate-400">
              Paste your exported JSON data below to restore or migrate your entire site structure.
            </DialogDescription>
          </DialogHeader>

          <div className="py-2">
            <Textarea
              rows={8}
              value={importJsonText}
              onChange={(e) => setImportJsonText(e.target.value)}
              placeholder="Paste JSON configuration text here..."
              className="bg-white/[0.04] border-white/10 text-white text-xs font-mono"
            />
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setImportModalOpen(false)} className="border-white/10 text-xs">
              Cancel
            </Button>
            <Button onClick={handleImport} className="bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs">
              Import & Apply Now
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* ========================================================================= */}
      {/* MODAL: ADD NEW CLIENT TESTIMONIAL                                         */}
      {/* ========================================================================= */}
      <Dialog open={addTestimonialOpen} onOpenChange={setAddTestimonialOpen}>
        <DialogContent className="bg-[#090d1c] border-white/15 text-white max-w-xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-lg font-bold text-white flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-cyan-400" />
              <span>Add New Client Testimonial</span>
            </DialogTitle>
            <DialogDescription className="text-xs text-slate-400">
              Create a new client review with photo, star rating, reaction badge, and localized text.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-2">
            {/* Client Avatar Upload / URL */}
            <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2.5">
              <label className="text-xs font-semibold text-slate-300 block">Client Photo / Avatar</label>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-neutral-800 border-2 border-white/15 shrink-0">
                  <img
                    src={newTestimonialData.avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"}
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-2">
                    <label htmlFor="modal-test-avatar-upload" className="cursor-pointer">
                      <div className="px-3 py-1.5 rounded-xl bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-500/30 text-cyan-300 text-xs font-semibold flex items-center gap-1.5">
                        {modalTestimonialUploading ? (
                          <>
                            <Loader2 className="w-3.5 h-3.5 animate-spin text-cyan-400" />
                            <span>Uploading...</span>
                          </>
                        ) : (
                          <>
                            <Upload className="w-3.5 h-3.5 text-cyan-400" />
                            <span>Upload Client Photo</span>
                          </>
                        )}
                      </div>
                    </label>
                    <input
                      id="modal-test-avatar-upload"
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleNewTestimonialAvatarUpload}
                    />
                  </div>

                  <Input
                    value={newTestimonialData.avatar}
                    onChange={(e) => setNewTestimonialData({ ...newTestimonialData, avatar: e.target.value })}
                    placeholder="Or enter image URL (https://... or /uploads/...)"
                    className="bg-white/[0.04] border-white/10 text-white text-xs h-8 font-mono"
                  />
                </div>
              </div>
            </div>

            {/* Client Names */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">Client Name (English) *</label>
                <Input
                  value={newTestimonialData.name}
                  onChange={(e) => setNewTestimonialData({ ...newTestimonialData, name: e.target.value })}
                  placeholder="e.g. Dr. Abrar Chowdhury"
                  className="bg-white/[0.04] border-white/10 text-white text-xs"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">Client Name (বাংলা - ঐচ্ছিক)</label>
                <Input
                  value={newTestimonialData.nameBn || ""}
                  onChange={(e) => setNewTestimonialData({ ...newTestimonialData, nameBn: e.target.value })}
                  placeholder="e.g. ডা. আবরার চৌধুরী"
                  className="bg-white/[0.04] border-white/10 text-white text-xs"
                />
              </div>
            </div>

            {/* Role, Company, Location */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">Role / Designation</label>
                <Input
                  value={newTestimonialData.role}
                  onChange={(e) => setNewTestimonialData({ ...newTestimonialData, role: e.target.value })}
                  placeholder="e.g. Founder & CMO"
                  className="bg-white/[0.04] border-white/10 text-white text-xs"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">Company Name</label>
                <Input
                  value={newTestimonialData.company}
                  onChange={(e) => setNewTestimonialData({ ...newTestimonialData, company: e.target.value })}
                  placeholder="e.g. CarePulse BD"
                  className="bg-white/[0.04] border-white/10 text-white text-xs"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">City / Country</label>
                <Input
                  value={newTestimonialData.location}
                  onChange={(e) => setNewTestimonialData({ ...newTestimonialData, location: e.target.value })}
                  placeholder="e.g. Dhaka, Bangladesh"
                  className="bg-white/[0.04] border-white/10 text-white text-xs"
                />
              </div>
            </div>

            {/* Rating & Reaction */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3 rounded-2xl bg-white/[0.03] border border-white/10">
              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                  Star Rating ({newTestimonialData.rating}/5)
                </label>
                <div className="flex items-center gap-1.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setNewTestimonialData({ ...newTestimonialData, rating: star })}
                      className="p-1 hover:scale-110 transition-transform"
                    >
                      <Star
                        className={`w-5 h-5 ${
                          star <= newTestimonialData.rating
                            ? "fill-[#F59E0B] text-[#F59E0B]"
                            : "text-slate-600"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                  Reaction Badge: <span className="text-white font-bold ml-1">{newTestimonialData.reaction || "❤️"}</span>
                </label>
                <div className="flex items-center gap-2">
                  {["❤️", "🔥", "🚀", "⚡", "💎"].map((emoji) => (
                    <button
                      key={emoji}
                      type="button"
                      onClick={() => setNewTestimonialData({ ...newTestimonialData, reaction: emoji })}
                      className={`w-8 h-8 rounded-xl text-sm flex items-center justify-center transition-all ${
                        (newTestimonialData.reaction || "❤️") === emoji
                          ? "bg-white/20 border border-white/30 scale-105"
                          : "bg-white/5 hover:bg-white/10"
                      }`}
                    >
                      {emoji}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* English Review */}
            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">Review Content (English) *</label>
              <Textarea
                rows={3}
                value={newTestimonialData.content}
                onChange={(e) => setNewTestimonialData({ ...newTestimonialData, content: e.target.value })}
                placeholder="What did the client say about WebZen BD..."
                className="bg-white/[0.04] border-white/10 text-white text-xs"
              />
            </div>

            {/* Bengali Review */}
            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">Review Content (বাংলা - ঐচ্ছিক)</label>
              <Textarea
                rows={2}
                value={newTestimonialData.contentBn || ""}
                onChange={(e) => setNewTestimonialData({ ...newTestimonialData, contentBn: e.target.value })}
                placeholder="বাংলা রিভিউ টেক্সট..."
                className="bg-white/[0.04] border-white/10 text-white text-xs font-bangla-ui"
              />
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setAddTestimonialOpen(false)} className="border-white/10 text-xs">
              Cancel
            </Button>
            <Button onClick={handleCreateTestimonial} className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs">
              Save Testimonial
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

    </div>
  );
}
