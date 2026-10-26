import Tabs from "../components/tabs/Tabs";

export default function TabsPage() {
  return (
    <Tabs
      tabs={[
        {
          id: 'resumo',
          title: 'Resumo',
          content: <p>Conteúdo do resumo.</p>,
        },
        {
          id: 'detalhes',
          title: 'Detalhes',
          content: <p>Informações detalhadas.</p>,
        },
        {
          id: 'contato',
          title: 'Contato',
          content: <p>Informações de contato.</p>,
        },
      ]}
    />
  );
}
