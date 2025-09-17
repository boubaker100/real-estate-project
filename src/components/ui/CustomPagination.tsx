"use client";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const CustomPagination = ({
  totalPages,
  currentPage,
  onPageChange,
}: PaginationProps) => {
  return (
    <Pagination className="mb-14">
      <PaginationContent>
        {/* prev */}
        {currentPage > 1 && (
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onPageChange(currentPage - 1);
              }}
              className="bg-[#F4F4F4] hover:bg-[#cdcdcd] drop-shadow-lg"
            />
          </PaginationItem>
        )}

        {/* numbers */}
        {[...Array(totalPages)].map((_, index) => (
          <PaginationItem key={index}>
            <PaginationLink
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onPageChange(index + 1);
              }}
              className={`bg-[#F4F4F4] hover:bg-[#cdcdcd] drop-shadow-lg mx-1 ${
                currentPage === index + 1 ? "opacity-50" : ""
              }`}
            >
              {index + 1}
            </PaginationLink>
          </PaginationItem>
        ))}

        {/* Next */}
        {currentPage < totalPages && (
          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onPageChange(currentPage + 1);
              }}
              className="bg-[#F4F4F4] hover:bg-[#cdcdcd] drop-shadow-lg"
            />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
};

export default CustomPagination;
