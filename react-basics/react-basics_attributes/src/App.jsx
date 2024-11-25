import "./styles.css";

export default function App() {
  return <QuizCard />;
}

function QuizCard() {
  return (
    <article className="article">
      <h2 className="article__title">What is &quot;AI&quot; stand for?</h2>
      <label htmlFor="article_answer">Answer:</label>
      <input id="article_answer" type="text" />
      <a href="https://en.wikipedia.org/wiki/Artificial_intelligence">
        Lear more about AI on wikipedia
      </a>
    </article>
  );
}
