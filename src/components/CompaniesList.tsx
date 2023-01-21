import { Divider, Stack, Text, StackDivider } from "@chakra-ui/react";
import Company from "./Company";

export default function Companies() {
  return (
    <>
      <Stack direction="column" p={4} id="companies">
        <Company
          name="XP"
          role="Jr. Software Engineer"
          data="Agosto, 2022 - Fevereiro, 2023"
          image="xp.png"
          description="Desenvolvi diversas ferramentas para velhor o workflow e confiabilidade dos processos existentes na tesouraria. Atuei também no processo de centralização das bases de dados e sistemas."
          stack="Python, Go e SQL"
        />
        <Company
          name="Pipefy"
          role="Jr. Software Engineer"
          data="Janeiro, 2021 - Julho, 2022"
          image="pipefy.png"
          description="Fiz parte do Young Guns Tech, um programa de Trainee que me permitiu transitar entre as áreas da empresa e conhecer o nosso produto e seus clientes. Ao longo da minha trajetória desenvolvi diversas features para a plataforma, a Share Inbox, a Form Hub, Guest Portal e na área de Product Led Growth melhorando a conversão da plataforma através da melhora da usabilidade e FTUE."
          stack="TypeScript, React, NextJS, GraphQL, Ruby on Rails, Elixir"
        />
        <Company
          name="XP"
          role="Back Office Summer Intern"
          data="Dezembro, 2019 - Fevereiro, 2020"
          image="xp.png"
          description="Desenvolvi um portal baseado em Django para o acompanhamento de performance de fundos, desenvolvi dashboards dos fundos em Power BI às integrando com o Portal e desenvolvi, também, uma série de automatizações para melhorar a qualidade de vida dos membros da área, além de gerenciar e testar atualizações de plataformas da área."
          stack="Python, Django, Power BI e SQL"
        />
        <Company
          name="Amigos da Poli"
          role="Tech Volunteer"
          data="Setembro, 2019 - Dezembro, 2020"
          image="adp.jpg"
          description="Desenvolvi o site do Edital de Projetos de 2020, utilizando Angular, e desenvolvi o novo site da Marca com CMS utilizando as tecnologias React e Gatsby. O novo site foi crucial para aumentar a conversão e doações para o fundo, para o Mês de Doar, uma desenvolvi uma dashboard que exibia em tempo real o número de doações de forma gamificada, o que aumentou o engajamento dos doadores durante o evento."
          stack="Angular, React e Gatsby"
        />
        <Company
          name="Poli Júnior"
          role="Software Engineer"
          data="Novembro, 2018 - Janeiro, 2021"
          image="poli-junior.png"
          description="Desenvolvi aplicações customizadas para diversos clientes utilizando Django, React, React Native e NodeJS. Introduzi e ensinei as tecnologias React, React Native e NodeJS, bem como noções de Arquitetura de Software para a empresa a fim de melhorar a qualidade de nossos projetos."
          stack="Python, Django, NodeJS, React e React Native"
        />
      </Stack>
    </>
  );
}
