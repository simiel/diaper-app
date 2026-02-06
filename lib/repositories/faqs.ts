import { prisma } from "@/lib/prisma";

export type FAQItem = {
  question: string;
  answer: string;
};

export const getFAQs = async (): Promise<FAQItem[]> => {
  try {
    const faqs = await prisma.fAQ.findMany({
      orderBy: { order: "asc" },
    });
    return faqs.map((faq) => ({
      question: faq.question,
      answer: faq.answer,
    }));
  } catch {
    return [];
  }
};
