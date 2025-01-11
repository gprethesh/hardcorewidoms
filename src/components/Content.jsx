import { Separator } from "@/components/ui/separator";
import { useState, useEffect } from "react";
import { post1 } from "@/post/post1";
import { post2 } from "@/post/post2";
import { post3 } from "@/post/post3";
import { post4Preview } from "@/post/post4";
import ReactMarkdown from "react-markdown";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useParams, useNavigate } from "react-router-dom";

const Content = () => {
  const { moduleSlug, subModuleSlug } = useParams();
  const navigate = useNavigate();
  const sections = [post1, post2, post3, { ...post4Preview, isLocked: true }];
  const [activeModule, setActiveModule] = useState(() => {
    const targetModule = sections.find(
      (section) => section.slug === moduleSlug
    );
    return targetModule ? targetModule.id : sections[0].id;
  });
  const [activeSubModule, setActiveSubModule] = useState(() => {
    const targetModule = sections.find(
      (section) => section.slug === moduleSlug
    );
    if (targetModule?.subModules) {
      const targetSubModule = targetModule.subModules.find(
        (sub) => sub.slug === subModuleSlug
      );
      return targetSubModule
        ? targetSubModule.id
        : targetModule.subModules[0]?.id;
    }
    return null;
  });
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (moduleSlug) {
      const targetModule = sections.find(
        (section) => section.slug === moduleSlug
      );
      if (targetModule) {
        setActiveModule(targetModule.id);

        if (subModuleSlug && targetModule.subModules) {
          const targetSubModule = targetModule.subModules.find(
            (sub) => sub.slug === subModuleSlug
          );
          if (targetSubModule) {
            setActiveSubModule(targetSubModule.id);
          }
        } else if (targetModule.subModules?.length > 0) {
          setActiveSubModule(targetModule.subModules[0].id);
        }
      }
    }
  }, [moduleSlug, subModuleSlug]);

  const handleModuleClick = (moduleId) => {
    const module = sections.find((section) => section.id === moduleId);
    setActiveModule(moduleId);

    if (module?.subModules?.length > 0) {
      setActiveSubModule(module.subModules[0].id);
      navigate(`/mastery/${module.slug}/${module.subModules[0].slug}`);
    } else {
      navigate(`/mastery/${module.slug}`);
    }
  };

  const handleSubModuleClick = (subModuleId) => {
    setActiveSubModule(subModuleId);
    const module = sections.find((section) => section.id === activeModule);
    const subModule = module?.subModules?.find((sub) => sub.id === subModuleId);
    if (module?.slug && subModule?.slug) {
      navigate(`/mastery/${module.slug}/${subModule.slug}`);
    }
  };

  const getCurrentIndices = () => {
    const moduleIndex = sections.findIndex(
      (section) => section.id === activeModule
    );
    const currentModule = sections[moduleIndex];
    const subModuleIndex =
      currentModule?.subModules?.findIndex(
        (sub) => sub.id === activeSubModule
      ) ?? -1;
    return { moduleIndex, subModuleIndex };
  };

  const handleNavigation = (direction) => {
    const { moduleIndex, subModuleIndex } = getCurrentIndices();
    const currentModule = sections[moduleIndex];

    if (currentModule?.subModules?.length > 0) {
      const newSubIndex = subModuleIndex + direction;
      if (newSubIndex >= 0 && newSubIndex < currentModule.subModules.length) {
        const newSubModule = currentModule.subModules[newSubIndex];
        setActiveSubModule(newSubModule.id);
        navigate(`/mastery/${currentModule.slug}/${newSubModule.slug}`);
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
    }

    const newModuleIndex = moduleIndex + direction;
    if (newModuleIndex >= 0 && newModuleIndex < sections.length) {
      const newModule = sections[newModuleIndex];
      setActiveModule(newModule.id);

      if (newModule.subModules?.length > 0) {
        const targetSubModule =
          direction > 0
            ? newModule.subModules[0]
            : newModule.subModules[newModule.subModules.length - 1];
        setActiveSubModule(targetSubModule.id);
        navigate(`/mastery/${newModule.slug}/${targetSubModule.slug}`);
      } else {
        navigate(`/mastery/${newModule.slug}`);
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleUnlock = () => {
    setIsUnlocked(true);
    // Add your payment processing logic here
  };

  const getContent = (section) => {
    if (section.id === "post4" && !isUnlocked) {
      return (
        section.previewContent ||
        "This content is locked. Please unlock to view the full article."
      );
    }

    if (section.subModules) {
      const activeSubModuleContent = section.subModules.find(
        (sub) => sub.id === activeSubModule
      )?.content;
      return activeSubModuleContent || section.content;
    }

    return section.content;
  };

  const renderDesktopSidebar = () => (
    <aside className="hidden md:block md:w-64 flex-shrink-0">
      <div className="md:sticky md:top-20">
        <nav className="space-y-1">
          {sections.map((section) => (
            <div key={section.id}>
              <button
                onClick={() => handleModuleClick(section.id)}
                className={`w-full text-left px-4 py-2 text-sm rounded-lg transition-colors
                  ${
                    activeModule === section.id
                      ? "bg-[#670404] text-white "
                      : "hover:bg-gray-100"
                  }`}
              >
                {section.title}
              </button>

              {activeModule === section.id && section.subModules && (
                <div className="ml-4 mt-1 space-y-1">
                  {section.subModules.map((subModule) => (
                    <button
                      key={subModule.id}
                      onClick={() => handleSubModuleClick(subModule.id)}
                      className={`w-full text-left px-4 py-1.5 text-sm rounded-lg transition-colors
                        ${
                          activeSubModule === subModule.id
                            ? "text-[#670404] font-bold bg-gray-300/10"
                            : "hover:bg-gray-100"
                        }`}
                    >
                      {subModule.title}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );

  const renderMobileSheet = () => (
    <SheetContent side="bottom" className="h-[40vh]">
      <SheetHeader>
        <SheetTitle>Modules</SheetTitle>
      </SheetHeader>
      <div className="mt-4 space-y-2 overflow-y-auto max-h-[calc(40vh-80px)]">
        {sections.map((section) => (
          <div key={section.id}>
            <Button
              variant="ghost"
              className={`w-full justify-start ${
                activeModule === section.id ? "bg-[#670404] text-white" : ""
              }`}
              onClick={() => {
                handleModuleClick(section.id);
              }}
            >
              {section.title}
            </Button>

            {activeModule === section.id && section.subModules && (
              <div className="ml-4 mt-1 space-y-1">
                {section.subModules.map((subModule) => (
                  <Button
                    key={subModule.id}
                    variant="ghost"
                    size="sm"
                    className={`w-full justify-start ${
                      activeSubModule === subModule.id
                        ? "text-[#670404] font-bold bg-gray-300/10"
                        : ""
                    }`}
                    onClick={() => {
                      handleSubModuleClick(subModule.id);
                      const sheet = document.querySelector(
                        '[data-state="open"]'
                      );
                      if (sheet) sheet.click();
                    }}
                  >
                    {subModule.title}
                  </Button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </SheetContent>
  );

  return (
    <div className="min-h-screen w-full  pb-16 md:pb-0">
      <div className="flex flex-col md:flex-row gap-6 px-4 py-6 max-w-7xl mx-auto">
        {renderDesktopSidebar()}

        <main className="flex-1 max-w-3xl w-full mx-auto">
          {sections
            .filter((section) => section.id === activeModule)
            .map((section) => (
              <article
                key={section.id}
                className="prose prose-lg max-w-none [text-align:justify] px-0 sm:px-4"
              >
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-8 text-[#670404] border-b border-[#670404]/20 pb-4 whitespace-normal [word-spacing:normal] tracking-normal">
                  {section.title}
                  {section.subModules && activeSubModule && (
                    <span className="block text-xl mt-2">
                      {
                        section.subModules.find(
                          (sub) => sub.id === activeSubModule
                        )?.title
                      }
                    </span>
                  )}
                </h1>

                <div className="relative">
                  <div
                    className={`text-gray-700 leading-relaxed space-y-6 ${
                      section.id === "post4" && !isUnlocked
                        ? "blur-sm select-none"
                        : ""
                    }`}
                  >
                    <ReactMarkdown>{getContent(section)}</ReactMarkdown>
                  </div>

                  {section.id === "post4" && !isUnlocked && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center bg-[#F0EEEE]/80 p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold text-[#670404] mb-4">
                          Premium Content
                        </h3>
                        <p className="mb-4">
                          Unlock this content to continue reading
                        </p>
                        <button
                          onClick={handleUnlock}
                          className="bg-[#670404] text-white px-6 py-2 rounded-lg hover:bg-[#670404]/90 transition-colors"
                        >
                          Unlock Content
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-8 sm:mt-12 flex justify-between items-center border-t border-gray-200 pt-4">
                  <button
                    onClick={() => handleNavigation(-1)}
                    className={`px-3 sm:px-4 py-2 rounded-lg transition-colors text-sm sm:text-base ${
                      getCurrentIndices().moduleIndex === 0 &&
                      getCurrentIndices().subModuleIndex <= 0
                        ? "invisible"
                        : "bg-[#670404] text-white hover:bg-[#670404]/90"
                    }`}
                  >
                    ← Previous
                  </button>
                  <button
                    onClick={() => handleNavigation(1)}
                    className={`px-3 sm:px-4 py-2 rounded-lg transition-colors text-sm sm:text-base ${
                      getCurrentIndices().moduleIndex === sections.length - 1 &&
                      (getCurrentIndices().subModuleIndex === -1 ||
                        getCurrentIndices().subModuleIndex ===
                          sections[getCurrentIndices().moduleIndex]?.subModules
                            ?.length -
                            1)
                        ? "invisible"
                        : "bg-[#670404] text-white hover:bg-[#670404]/90"
                    }`}
                  >
                    Next →
                  </button>
                </div>
              </article>
            ))}
        </main>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t md:hidden z-50">
        <div className="flex items-center justify-between px-4 py-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => handleNavigation(-1)}
            disabled={getCurrentIndices().moduleIndex === 0}
          >
            ← Prev
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm">
                {getCurrentIndices().moduleIndex + 1}/{sections.length}
              </Button>
            </SheetTrigger>
            {renderMobileSheet()}
          </Sheet>

          <Button
            variant="ghost"
            size="sm"
            onClick={() => handleNavigation(1)}
            disabled={getCurrentIndices().moduleIndex === sections.length - 1}
          >
            Next →
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Content;
