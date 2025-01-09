import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import book1 from "../assets/bookone.jpg";
import book2 from "../assets/bookone.jpg";
import book3 from "../assets/bookone.jpg";

const Books = () => {
  const books = [
    {
      title: "The Stag By The Cabin",
      author: "Philip Vasquez",

      rating: 5,
      description:
        "The passage experienced a surge in popularity during the 1960s when Letraset used it...",
      image: book1,
      gradientColors: {
        from: "#060706",
        to: "#5A8264",
      },
    },
    {
      title: "The Stag By The Cabin",
      author: "Adora Aronowitz",

      rating: 5,
      description:
        "The passage experienced a surge in popularity during the 1960s when Letraset used it...",
      image: book2,
      gradientColors: {
        from: "#2C3E50",
        to: "#3498DB",
      },
    },
    {
      title: "The World Of Abstract Art",
      author: "Emily Robbins",

      rating: 4,
      description:
        "The passage experienced a surge in popularity during the 1960s when Letraset used it...",
      image: book3,
      gradientColors: {
        from: "#090804",
        to: "#ECCC4E",
      },
    },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-16">
      <div className="text-center mb-12">
        <h2 className="main-heading-2">5000 Years Old Secret Wisdoms</h2>
        <p className="mt-4 text-gray-600 italic">
          "Top Notch 51+ Ancient Lessons on Womans Nature."
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {books.map((book, index) => (
          <Card
            key={index}
            className="overflow-hidden group hover:shadow-xl transition-shadow duration-300 h-full shadow-lg"
          >
            <CardContent className="p-0 h-full">
              <div
                style={{
                  background: `linear-gradient(to bottom right, ${book.gradientColors.from}, ${book.gradientColors.to})`,
                }}
                className="h-full relative p-6 flex flex-row justify-between"
              >
                {/* Book Image - now on the left */}
                <div className="w-24 sm:w-32 h-36 sm:h-48 flex-shrink-0 mr-4">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-full h-full object-cover shadow-[0_8px_30px_rgb(0,0,0,0.3)]"
                  />
                </div>

                {/* Book Details */}
                <div className="text-white flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-1 text-white line-clamp-2 min-h-[2.5rem] sm:min-h-[3rem]">
                      {book.title}
                    </h3>
                    <p className="text-red-100 text-sm sm:text-base mb-2">
                      {book.author}
                    </p>

                    {/* Rating stars - adjusted color */}
                    <div className="flex gap-1 mb-3">
                      {[...Array(book.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>

                    <p className="text-xs sm:text-sm text-red-100 mb-4 line-clamp-2">
                      {book.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <Button
                      variant="secondary"
                      size="sm"
                      className="text-xs sm:text-sm border-2 border-[#121212] bg-white hover:bg-gradient-to-r from-[#121212] to-[#670404] text-[#121212] hover:text-white transition-colors duration-300"
                    >
                      Read More →
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Books;
