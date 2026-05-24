import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { CategoryRow } from "@/components/CategoryRow";
import { UploadSection } from "@/components/UploadSection";
import { Footer } from "@/components/Footer";
import { CATEGORIES, GAMES } from "@/data/games";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Game Tryx — Discover. Download. Play." },
      { name: "description", content: "Neon-lit indie game showcase. Discover, download and play games crafted by developers and students." },
      { property: "og:title", content: "Game Tryx — Indie Game Showcase" },
      { property: "og:description", content: "A futuristic gaming launcher for indie creators." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700;900&family=Rajdhani:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Helper to apply search text filter
  const filterBySearch = (gameList: typeof GAMES) => {
    if (!searchQuery.trim()) return gameList;
    return gameList.filter((g) => 
      g.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      g.developer.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  const trendingGames = filterBySearch(GAMES.slice(0, 5));
  const categoriesToShow = selectedCategory === "All" ? CATEGORIES : CATEGORIES.filter(c => c === selectedCategory);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Header />
      <main>
        <Hero 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <div id="games-section" className="mx-auto max-w-7xl px-6 py-12 md:py-16 scroll-mt-20">
          
          {selectedCategory === "All" && trendingGames.length > 0 && (
            <div id="trending" className="mb-20 animate-in fade-in duration-500">
              <CategoryRow title="Trending" games={trendingGames} limit={50} />
            </div>
          )}

          <div id="categories" className="space-y-20 animate-in fade-in duration-500">
            {categoriesToShow.map((cat) => {
              const categoryGames = filterBySearch(GAMES.filter((g) => g.category === cat));
              if (categoryGames.length === 0) return null;
              
              return (
                <CategoryRow
                  key={cat}
                  title={cat}
                  games={categoryGames}
                  limit={50}
                />
              );
            })}

            {/* Show a message if completely empty after searching */}
            {categoriesToShow.every(cat => filterBySearch(GAMES.filter((g) => g.category === cat)).length === 0) && trendingGames.length === 0 && (
              <div className="text-center py-20 opacity-70">
                <h3 className="text-2xl font-bold">No games found for "{searchQuery}"</h3>
                <p className="mt-2 text-muted-foreground">Try searching for a different title or developer.</p>
              </div>
            )}
          </div>

        </div>

        <UploadSection />
      </main>
      <Footer />
    </div>
  );
}
