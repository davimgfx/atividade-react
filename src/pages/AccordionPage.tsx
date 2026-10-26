import Accordion from '../components/accordion/Accordion';

export default function AccordionPage() {
  return (
    <section>
      <h1>Perguntas Frequentes</h1>
      <Accordion
        title="Pergunta exemplo 1"
        children="Essa seção é um exemplo de Accordion 1"
      />
      <Accordion
        title="Pergunta exemplo 2"
        children="Essa seção é um exemplo de Accordion 2"
      />
      <Accordion
        title="Pergunta exemplo 3"
        children="Essa seção é um exemplo de Accordion 3"
      />
    </section>
  );
}
