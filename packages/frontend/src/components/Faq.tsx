import "./style.css";

export default function Faq() {
  const faqs = [
    {
      question: "What is Pawgress Planner?",
      answer: "Pawgress Planner helps you keep track of your pet care tasks, like feeding, walking, and vet visits."
    },
    {
      question: "Do I need an account to use the app?",
      answer: "Yes! You'll need an account to create pets and tasks. It helps store your data securely and persistently."
    },
    {
      question: "How do I add a pet?",
      answer: "Go to 'Add/Edit Pet' from the navbar, fill in the details, and click submit!"
    },
    {
      question: "Can I track multiple pets?",
      answer: "Yes, you can manage multiple pets and assign individual tasks to each one."
    },
    {
      question: "How do I create a task?",
      answer: "Navigate to 'Add Task', fill in the task name, select the pet, and save it."
    },
    {
      question: "Is there a dark mode?",
      answer: "Yes! Click the 🌙 toggle on the top-left of the navbar to switch to dark mode."
    },
    {
      question: "What if I forget my password?",
      answer: "Currently, we don't support password reset — but you can sign up again with a different email."
    },
    {
      question: "How do I create tasks for my pets?",
      answer: "Head to the Add Task page, where you can enter a task name (like “Feed Fluffy” or “Clean litter box”) and assign it to one of your pets."
    }
    ,
    {
      question: "Can I check off tasks as I complete them?",
      answer: "Absolutely! On the Dashboard, each day’s tasks appear as a checklist. You can check them off as you go to track your pet care progress."
    },
    {
      question: "Will my data stay saved if I refresh the page?",
      answer: "Yes! All pet and task information is saved securely to your account in the cloud, so you can refresh or revisit later without losing your progress."
    },
    {
      question: "Is my information private?",
      answer: "Yes. We never share your data. All personal and pet data is stored securely and only accessible to you."
    }
  ];

  return (
    <>
      <div className="faq-decoration">✧</div>
      <div className="faq-decoration">₊</div>
      <div className="faq-decoration">⋆</div>
      <div className="faq-decoration">⭒</div>
      <div className="faq-decoration">✦</div>

      <section aria-labelledby="faq-title" className="faq-section">
        <h1 id="faq-title" className="faq-title">FAQ</h1>
        <div className="faq-container">
          {faqs.map((faq, i) => (
            <article className="faq-item" key={i}>
              <h2 className="faq-header">{faq.question}</h2>
              <p className="faq-body">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
