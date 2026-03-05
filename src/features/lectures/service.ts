type LectureItem = {
  question: string;
  answer: string;
};

const lecturesByYear: Record<string, LectureItem[]> = {
  "Year 1": [
    {
      question: "What is active recall and why does it improve retention?",
      answer:
        "Active recall forces you to retrieve information without cues, which strengthens memory pathways and improves long-term retention for core university modules."
    },
    {
      question: "How do you structure a weekly revision cycle?",
      answer:
        "Use a 3-pass cycle: first pass for understanding lecture notes, second pass for Q&A self-testing, third pass for timed mixed-topic practice."
    }
  ],
  "Year 2": [
    {
      question: "How does spaced repetition differ from cramming?",
      answer:
        "Spaced repetition schedules repeated exposure over increasing intervals, while cramming compresses learning into short bursts that fade quickly after exams."
    },
    {
      question: "What makes an effective Q&A summary?",
      answer:
        "Strong summaries isolate key concepts into exam-style questions, include concise model answers, and connect definitions to applied examples."
    }
  ],
  "Year 3": [
    {
      question: "How should students approach interdisciplinary modules?",
      answer:
        "Build a concept map across subjects, identify overlapping themes, and prepare Q&A cards that explain the same topic from multiple academic lenses."
    },
    {
      question: "What is the best way to prepare for open-response exams?",
      answer:
        "Train with structured answer frameworks, practice under time limits, and use lecture summary questions to quickly retrieve supporting evidence."
    }
  ],
  "Year 4": [
    {
      question: "How can you optimize research-heavy coursework?",
      answer:
        "Convert every paper into a mini Q&A brief: objective, method, findings, limitations, and relevance to your module outcomes."
    },
    {
      question: "How do you avoid revision overload in final years?",
      answer:
        "Prioritize by impact: difficult + high-weight topics first, then keep momentum with daily short review sessions and targeted weak-area drills."
    }
  ],
  "Year 5": [
    {
      question: "How do summary systems support capstone projects?",
      answer:
        "They speed up literature recall, help defend decisions in presentations, and provide reusable explanation blocks for reports and viva questions."
    },
    {
      question: "What is a sustainable exam strategy during internships?",
      answer:
        "Use compact, high-yield Q&A packs and weekly checkpoint sessions to preserve continuity without requiring long daily study windows."
    }
  ]
};

export function getLectureSummaries(year: string) {
  return lecturesByYear[year] ?? [];
}
