"use client";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/accordion";

import {
  Box,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Card,
  CardBody,
  Link,
  Text,
  Badge,
} from "@chakra-ui/react";

import {
  GraduationCap,
  User,
  UserCheck,
  ScrollText,
  BookOpen,
  Link as LinkIcon,
  FileClock,
  Braces,
  FileCode,
  FileCheck,
} from "lucide-react";
import CardIconStylized from "@/app/components/CardIconStylized";

export default function PageCurriculo() {
  return (
    <>
      <p className="text-gray-600 text-justify">
        Com mais de 10 anos de experiência como profissional de Desenvolvimento
        Web, minha carreira começou como Web Designer, pude contribuir em
        estratégias de redesign, automação e atualizações tecnológicas em uma
        variedade de projetos, incluindo intranets, extranets, sites
        institucionais e landing pages. Destaco minha participação bem-sucedida
        na implementação da IA IBM Watson para otimizar o atendimento ao cliente
        em um site institucional. <br />
        <br />
        Motivada por minha paixão em tecnologias modernas, estou comprometida em
        retornar ao mercado de TI com habilidades atualizadas. Atualmente, estou
        focada em aprimorar minhas competências em React.js / Next.js e expandir
        meu conhecimento em back-end para me tornar uma Desenvolvedora Full
        Stack. Sou aluna em plataformas renomadas, como ADA Tech, Alura, DIO,
        Santander Becas, Potência Tech e Origamid.
        <br />
        <br />
        Confira abaixo minhas informações complementares. Estou entusiasmada e
        disponível para colaborar com sua equipe. Não hesite em entrar em
        contato para discutir oportunidades ou esclarecer qualquer dúvida. (chat
        privado, e-mail e/ou Whatsapp) #OpenToWork
      </p>

      <section>
        <h2 className="text-pink-600 font-semibold text-xl mt-6 mb-2">
          FORMAÇÃO ACADÊMICA
        </h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
          <CardIconStylized
            icon={<BookOpen />}
            title="Pós-graduação em Desenvolvimento Full Stack"
            subtitle="XP Educação | "
            badge={true}
            textBadge="Em breve"
          />
          <CardIconStylized
            icon={<GraduationCap />}
            title="Bacharel em Desenho Industrial"
            subtitle="Estácio | 2012 - 2016"
            badge={false}
          />
          <CardIconStylized
            icon={<GraduationCap />}
            title="Técnico em Informática"
            subtitle="Colégio 1° de Maio | 2006 - 2008"
            badge={false}
          />
          <CardIconStylized
            icon={<GraduationCap />}
            title="Ensino Médio"
            subtitle="Colégio 1° de Maio | 2006 - 2008"
            badge={false}
          />
        </div>
      </section>

      <section>
        <h2 className="text-pink-600 font-semibold text-xl mt-6 mb-2">
          EXPERIÊNCIAS PROFISSIONAIS
        </h2>
        <Accordion allowToggle>
          <AccordionItem>
            <h2>
              <AccordionButton className="bg-white">
                <Box
                  as="div"
                  flex="1"
                  textAlign="left"
                  className="flex items-center gap-2"
                >
                  <UserCheck className="text-pink-600" />
                  <div className="flex flex-wrap">
                    <span className="font-semibold text-md">
                      Desenvolvedora Front-end Jr,
                    </span>
                    <span className="text-gray-500 ml-2">
                      TI | Temporário | Atual
                    </span>
                  </div>
                </Box>
                <AccordionIcon className="text-blue-700 bg-blue-100 p-1 box-border w-8 h-8 rounded-md" />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <p>
                Desenvolvimento e manutenção de sistemas web. (React js,
                Bootstrap)
              </p>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton className="bg-white">
                <Box
                  as="div"
                  flex="1"
                  textAlign="left"
                  className="flex items-center gap-2"
                >
                  <User className="text-pink-600" />
                  <div className="flex flex-wrap">
                    <span className="font-semibold text-md">
                      Desenvolvedora Web,
                    </span>
                    <span className="text-gray-500 ml-2">
                      TI | Freelancer | 2022 - 2023
                    </span>
                  </div>
                </Box>
                <AccordionIcon className="text-blue-700 bg-blue-100 p-1 box-border w-8 h-8 rounded-md" />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <p>
                Desenvolvo projetos front-end criativos que proporcionam boas
                experiências digitais na web, garantindo consistência e
                responsividade.
              </p>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton className="bg-white">
                <Box
                  as="div"
                  flex="1"
                  textAlign="left"
                  className="flex items-center gap-2"
                >
                  <User className="text-pink-600" />
                  <div className="flex flex-wrap">
                    <span className="font-semibold text-md">
                      Transição de carreira,
                    </span>
                    <span className="text-gray-500 ml-2"> 2022 - 2023</span>
                  </div>
                </Box>
                <AccordionIcon className="text-blue-700 bg-blue-100 p-1 box-border w-8 h-8 rounded-md" />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <p>Transição de carreira e maternidade em tempo integral.</p>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton className="bg-white">
                <Box
                  as="div"
                  flex="1"
                  textAlign="left"
                  className="flex items-center gap-2"
                >
                  <User className="text-pink-600" />
                  <div className="flex flex-wrap">
                    <span className="font-semibold text-md">
                      Analista II, Web Designer,
                    </span>
                    <span className="text-gray-500 ml-2">
                      TI | Ecad | 2012 - 2022
                    </span>
                  </div>
                </Box>
                <AccordionIcon className="text-blue-700 bg-blue-100 p-1 box-border w-8 h-8 rounded-md" />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <p>
                Responsável pelo desenvolvimento front-end para diversas
                plataformas da empresa, incluindo o site institucional,
                intranet, extranet e aplicativos móveis responsivos. Estive
                envolvida de forma ativa em projetos de redesign de interface e
                na implementação de atualizações tecnológicas. Também contribui
                na equipe que implementou um chatbot baseado na inteligência
                artificial da IBM Watson, sendo responsável pelo design das
                interações conversacionais.
              </p>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton className="bg-white">
                <Box
                  as="div"
                  flex="1"
                  textAlign="left"
                  className="flex items-center gap-2"
                >
                  <User className="text-pink-600" />
                  <div className="flex flex-wrap">
                    <span className="font-semibold text-md">
                      Estagiária de Desenvolvimento,
                    </span>
                    <span className="text-gray-500 ml-2">
                      TI | Minds At Work | 2009 - 2010
                    </span>
                  </div>
                </Box>
                <AccordionIcon className="text-blue-700 bg-blue-100 p-1 box-border w-8 h-8 rounded-md" />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <div className="space-y-2">
                <h3 className="font-semibold text-md">Atividades executadas</h3>
                <ul className="list-disc pl-4 pr-4 ml-4">
                  <li>
                    Realizava testes automatizados em uma aplicação desktop e
                    quando necessário implementava novas funcionalidades.
                  </li>
                </ul>
                <h3 className="font-semibold text-md">Linguagens exploradas</h3>
                <ul className="list-disc pl-4 pr-4 ml-4">
                  <li>Lua</li>
                  <li>Visual Basic.NET 0.5/0.6</li>
                </ul>
              </div>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton className="bg-white">
                <Box
                  as="div"
                  flex="1"
                  textAlign="left"
                  className="flex items-center gap-2"
                >
                  <User className="text-pink-600" />
                  <div className="flex flex-wrap">
                    <span className="font-semibold text-md">
                      Estagiária de Técnico em Informática,
                    </span>
                    <span className="text-gray-500 ml-2">
                      TI | Petrobras, BR | 2008 - 2009
                    </span>
                  </div>
                </Box>
                <AccordionIcon className="text-blue-700 bg-blue-100 p-1 box-border w-8 h-8 rounded-md" />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <div className="space-y-2">
                <p>
                  Participei do desenvolvimento de um sistema automatizado que
                  gerava relatórios em tempo real para o setor envolvido - G&E,
                  Gás & Energia. A interface precisava ser visualmente agradável
                  e de fácil compreensão pelos os usuários.
                </p>
                <h3 className="font-semibold text-md">Atividades executadas</h3>
                <ul className="list-disc pl-4 pr-4 ml-4">
                  <li>Palestras de ambientação;</li>
                  <li>Curso de Segurança da Informação;</li>
                  <li>
                    Estudos e pesquisas sobre desenvolvimento lógico de
                    softwares.
                  </li>
                </ul>
                <h3 className="font-semibold text-md">Linguagem explorada</h3>
                <ul className="list-disc pl-4 pr-4 ml-4">
                  <li>Visual Basic.NET 0.2/0.5/0.6</li>
                </ul>
              </div>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </section>

      <section className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h2 className="text-pink-600 font-semibold text-xl mt-6 mb-2">
            CERTIFICADOS RECENTES
          </h2>
          <Card>
            <CardBody className="space-y-2">
              <Link
                className="flex gap-2 text-blue-700 items-center"
                href="https://euprogramo.thinkific.com/certificates/fupjofzqji"
                isExternal
              >
                <ScrollText className="text-pink-600" />
                Back-End | Minha primeira API
              </Link>
              <Link
                className="flex gap-2 text-blue-700 items-center"
                href="https://cursos.alura.com.br/certificate/2d975fce-864f-4aca-8f3d-76fa25937918?lang=pt_BR"
                isExternal
              >
                <ScrollText className="text-pink-600" />
                React: Desenvolvendo com Javascript
              </Link>
              <Link
                className="flex gap-2 text-blue-700 items-center"
                href="https://drive.google.com/file/d/1-8paK4EUCunNoRQXg4REce9F5ROT0eLr/view?usp=sharing"
                isExternal
              >
                <ScrollText className="text-pink-600" />
                Desenvolvimento Web
              </Link>
              <Link
                className="flex gap-2 text-blue-700 items-center"
                href="https://drive.google.com/file/d/153iFhP8JlkbRDaY-CVNBgcqs2N23soKg/view?usp=sharing"
                isExternal
              >
                <ScrollText className="text-pink-600" />
                Fundamentos de Lógica de Programação
              </Link>
            </CardBody>
          </Card>
        </div>
        <div>
          <h2 className="text-pink-600 font-semibold text-xl mt-6 mb-2">
            CURSANDO
          </h2>
          <Card>
            <CardBody className="space-y-2 ">
              <Text className="flex flex-wrap gap-2 text-gray-600 items-center">
                <Badge colorScheme="pink">Santander Coders 23</Badge>
                Desenvolvimento Front-End
              </Text>

              <Text className="flex flex-wrap gap-2 text-gray-600 items-center">
                <Badge colorScheme="pink">Dio</Badge>
                Potência Tech iFood - Programação do Zero{" "}
              </Text>

              <Text className="flex flex-wrap gap-2 text-gray-600 items-center">
                <Badge colorScheme="pink">Ada</Badge> Front-end em React
                (Pausado)
              </Text>
            </CardBody>
          </Card>
        </div>
      </section>

      <section>
        <h2 className="text-pink-600 font-semibold text-xl mt-6 mb-2">
          FERRAMENTAS E TECNOLOGIAS
        </h2>
        <Card className="">
          <CardBody>
            <Tabs className="max-w-full scroll-auto scroll-ml-6 scroll-p-8 md:scroll-p-0">
              <TabList>
                <Tab>Design</Tab>
                <Tab>Programação</Tab>
                <Tab>CMS</Tab>
                <Tab>IA</Tab>
                <Tab>SO</Tab>
                <Tab>Outros</Tab>
              </TabList>

              <TabPanels>
                <TabPanel>
                  <ul className="list-disc">
                    <li>Adobe Illustrator</li>
                    <li>Adobe Photoshop</li>
                    <li>Adobe XD</li>
                    <li>
                      Angular Material (Material Design components for Angular)
                    </li>
                    <li>Bootstrap 4</li>
                    <li>Canva</li>
                    <li>Chakra UI</li>
                    <li>CSS Flexbox</li>
                    <li>CSS Grid Layout</li>
                    <li>CSS3</li>
                    <li>Figma</li>
                    <li>HTML/HTML5</li>
                    <li>Lucide (icons toolkit)</li>
                    <li>Tailwind CSS</li>
                    <li>Zeplin</li>
                  </ul>
                </TabPanel>
                <TabPanel>
                  <ul className="list-disc">
                    <li>Azure DevOps Server</li>
                    <li>GitHub</li>
                    <li>Next.js 13</li>
                    <li>React</li>
                    <li>Scrum / Kanban</li>
                    <li>Vercel (hospedagem de aplicações)</li>
                    <li>Visual Studio Code</li>
                  </ul>
                </TabPanel>
                <TabPanel>
                  <p className="pl-[-16px]">
                    Sistemas de gerenciamento de conteúdo:
                  </p>
                  <ul className="list-disc">
                    <li>Microsoft SharePoint</li>
                    <li>WordPress</li>
                  </ul>
                </TabPanel>
                <TabPanel>
                  <ul className="list-disc">
                    <li>Watson da IBM</li>
                  </ul>
                </TabPanel>
                <TabPanel>
                  <ul className="list-disc">
                    <li>Windows</li>
                  </ul>
                </TabPanel>
                <TabPanel>
                  <ul className="list-disc">
                    <li>MindManager</li>
                    <li>Trello</li>
                    <li>
                      <ul
                        className="list-disc"
                        style={{ listStyleType: "circle" }}
                      >
                        <li style={{ listStyleType: "none" }}>Office 365</li>
                        <li>Outlook</li>
                        <li>Microsoft Teams</li>
                        <li>SharePoint</li>
                        <li>Word</li>
                        <li>Excel</li>
                        <li>PowerPoint</li>
                        <li>OneNote</li>
                        <li>OneDrive</li>
                        <li>Planner</li>
                        <li>Yammer</li>
                      </ul>
                    </li>
                  </ul>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </CardBody>
        </Card>
      </section>
    </>
  );
}
