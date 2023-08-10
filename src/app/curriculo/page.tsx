'use client'

import { Accordion,
        AccordionItem,
        AccordionButton,
        AccordionIcon,
        AccordionPanel } from '@chakra-ui/accordion'

import { Box, Tabs, TabList, TabPanels, Tab, TabPanel,
          Card, CardBody, Link, Text, Badge } from '@chakra-ui/react'

import { GraduationCap, User, UserCheck, ScrollText, BookOpen, Link as LinkIcon, FileClock, Braces, FileCode, FileCheck} from 'lucide-react'
import CardIconStylized from '@/app/components/CardIconStylized'

  
export default function PageCurriculo() {
  
  return (
        <>
          <p className='text-gray-600 text-justify'>
            Tenho mais de 10 anos de experiência em projetos Web atuando como Analista Sênior Web Designer. Atualmente exerço a função de Desenvolvedora Front-end.<br/>
            Minha expertise está na junção das áreas de Design e Tecnologia de Informação, onde busco oferecer meu melhor como profissional.
          </p>
            
            <section>
              <h2 className='text-pink-600 font-semibold text-xl mt-6 mb-2'>FORMAÇÃO ACADÊMICA</h2>
              <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-6'>
                <CardIconStylized icon={<BookOpen/>} title="PÓS TECH Coding & Tech Journey from User to Creator" subtitle="FIAP + Alura | " badge={true} textBadge="Em breve" />
                <CardIconStylized icon={<GraduationCap/>} title="Bacharel em Desenho Industrial" subtitle="Estácio | 2012 - 2016" badge={false} />
                <CardIconStylized icon={<GraduationCap/>} title="Técnico em Informática" subtitle="Colégio 1° de Maio | 2006 - 2008" badge={false} />
                <CardIconStylized icon={<GraduationCap/>} title="Ensino Médio" subtitle="Colégio 1° de Maio | 2006 - 2008" badge={false} />
              </div>
            </section>            
            
            <section>
              <h2 className='text-pink-600 font-semibold text-xl mt-6 mb-2'>EXPERIÊNCIAS PROFISSIONAIS</h2>
              <Accordion allowToggle>
                <AccordionItem>
                  <h2>
                    <AccordionButton className='bg-white'>
                      <Box as="div" flex='1' textAlign='left' className='flex items-center gap-2'>
                        <UserCheck className='text-pink-600'/>
                        <div className='flex flex-wrap'>
                          <span className='font-semibold text-md'>Desenvolvedora Front-end,</span>
                          <span className='text-gray-500'>TI | Freelancer | Atual</span>
                        </div>
                      </Box>
                      <AccordionIcon className="text-blue-700 bg-blue-100 p-1 box-border w-8 h-8 rounded-md"/>
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <ul className='list-disc pl-4 pr-4 ml-4'>
                      <li>Me capacitando profissionalmente para ser uma Desenvolvedora Full Stack;</li>
                      <li>Criando portfólio de Aplicações Web;</li>
                      <li>Ansiosa para iniciar a PÓS TECH Coding & Tech Journey from User to Creator (FIAP+Alura);</li>
                      <li>Desenvolvo projetos criativos para clientes digitais usarem na internet.</li>
                    </ul>
                  </AccordionPanel>
                </AccordionItem>
                  
                  <AccordionItem>
                    <h2>
                      <AccordionButton className='bg-white'>
                        <Box as="div" flex='1' textAlign='left' className='flex items-center gap-2'>
                          <User className='text-pink-600'/>
                          <div className='flex flex-wrap'>
                            <span className='font-semibold text-md'>Analista Sênior, Web Designer,</span>
                            <span className='text-gray-500'>TI | Ecad | 2012 - 2022</span>
                          </div> 
                        </Box>
                        <AccordionIcon className="text-blue-700 bg-blue-100 p-1 box-border w-8 h-8 rounded-md"/>
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <p>Fui responsável pelo desenvolvimento do front-end para o site institucional, intranet, extranet e aplicativos móveis responsivos, 
                        participando ativamente de redesigns e atualizações tecnológicas. Colaborei no design de conversas e implementação do chatbot baseado na IA da IBM Watson, 
                        criei manuais para aplicações móveis e web, ofereci suporte SharePoint, e fui responsável pela criação de logos e identidades visuais de aplicações internas. 
                        Também auxiliei na configuração de uma Rede Social interna. Contribuí para atividades de endomarketing, como semanas temáticas e campanhas sazonais, 
                        assim como apresentações interativas em Powerpoint para eventos internos/externos à executivos e superintendência.</p>
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <h2>
                      <AccordionButton className='bg-white'>
                        <Box as="div" flex='1' textAlign='left' className='flex items-center gap-2'>
                          <User className='text-pink-600'/>
                          <div className='flex flex-wrap'>
                            <span className='font-semibold text-md'>Estagiária de Desenvolvimento,</span>
                            <span className='text-gray-500'>TI | Minds At Work | 2009 - 2010</span>
                          </div>
                        </Box>
                        <AccordionIcon className="text-blue-700 bg-blue-100 p-1 box-border w-8 h-8 rounded-md"/>
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <div className='space-y-2'>
                        <h3 className='font-semibold text-md'>Atividades executadas</h3>
                        <ul className='list-disc pl-4 pr-4 ml-4'>
                          <li>Realizava testes automatizados em uma aplicação desktop. Executava essa aplicação em diversas máquinas virtuais com configurações diferentes e no final relatava aos supervisores o que passava e o que dava erro.</li>
                        </ul>
                        <h3 className='font-semibold text-md'>Linguagens exploradas</h3>
                        <ul className='list-disc pl-4 pr-4 ml-4'>
                          <li>Lua</li>
                          <li>Visual Basic.NET 0.5/0.6</li>
                        </ul>
                      </div>
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <h2>
                      <AccordionButton className='bg-white'>
                        <Box as="div" flex='1' textAlign='left' className='flex items-center gap-2' >
                          <User className='text-pink-600'/>
                          <div className='flex flex-wrap'>
                            <span className='font-semibold text-md'>Estagiária de Técnico em Informática,</span>
                            <span className='text-gray-500'>TI | Petrobras, BR | 2008 - 2009</span>
                          </div>
                        </Box>
                        <AccordionIcon className="text-blue-700 bg-blue-100 p-1 box-border w-8 h-8 rounded-md"/>
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <div className='space-y-2'>
                        <p>Participei do desenvolvimento de um sistema automatizado que gerava relatórios em tempo real para o setor envolvido - G&E, Gás & Energia. 
                          A interface precisava ser visualmente agradável e de fácil compreensão pelos os usuários.</p>
                        <h3 className='font-semibold text-md'>Atividades executadas</h3>
                        <ul className='list-disc pl-4 pr-4 ml-4'>
                          <li>Palestras de ambientação;</li>
                          <li>Curso de Segurança da Informação;</li>
                          <li>Estudos e pesquisas sobre desenvolvimento lógico de softwares.</li>
                        </ul>
                        <h3 className='font-semibold text-md'>Linguagem explorada</h3>
                        <ul className='list-disc pl-4 pr-4 ml-4'>
                          <li>Visual Basic.NET 0.2/0.5/0.6</li>
                        </ul>
                      </div>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
            </section>

            <section className='grid sm:grid-cols-1 md:grid-cols-2 gap-4'>
              <div>
                <h2 className='text-pink-600 font-semibold text-xl mt-6 mb-2'>CERTIFICADOS RECENTES</h2>
                  <Card>
                    <CardBody className='space-y-2'>
                      <Link className='flex gap-2 text-blue-700' href='https://www.origamid.com/certificate/1c5ae08c' isExternal>
                        <ScrollText className='text-pink-600' />Bootstrap 4
                      </Link>
                      <Link className='flex gap-2 text-blue-700' href='https://www.origamid.com/certificate/2c366e2f' isExternal>
                        <ScrollText className='text-pink-600' />CSS com SASS
                      </Link>
                      <Link className='flex gap-2 text-blue-700' href='https://www.origamid.com/certificate/e911b997' isExternal>
                        <ScrollText className='text-pink-600' />CSS Grid Layout
                      </Link>
                      <Link className='flex gap-2 text-blue-700' href='https://www.origamid.com/certificate/3b3ced05' isExternal>
                        <ScrollText className='text-pink-600' />CSS Flexbox
                      </Link>
                      
                    </CardBody>
                  </Card>
              </div>
              <div>
                <h2 className='text-pink-600 font-semibold text-xl mt-6 mb-2'>CURSOS</h2> 
                <Card>
                  <CardBody className='space-y-2 '>
                    <Text className='flex gap-2 text-gray-600 items-center'>
                      <FileCheck className='text-pink-600' />Next.js 13
                    </Text>
                    <Text className='flex gap-2 text-gray-600 items-center'>
                      <FileClock className='text-pink-600' />JavaScript Completo ES6+ <Badge colorScheme='pink'>Cursando</Badge>
                    </Text>
                  </CardBody>
                </Card>
              </div>
            </section>

            <section>
              <h2 className='text-pink-600 font-semibold text-xl mt-6 mb-2'>FERRAMENTAS E TECNOLOGIAS</h2>
              <Card className=''>
                <CardBody>
                  <Tabs className='max-w-full scroll-auto scroll-ml-6 scroll-p-8 md:scroll-p-0'>
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
                        <ul className='list-disc'>
                          <li>Adobe Illustrator</li>
                          <li>Adobe Photoshop</li>
                          <li>Adobe XD</li>
                          <li>Angular Material (Material Design components for Angular)</li>
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
                        <ul className='list-disc'>
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
                        <p className='pl-[-16px]'>Sistemas de gerenciamento de conteúdo:</p>
                        <ul className='list-disc'>
                          <li>Microsoft SharePoint</li>
                          <li>WordPress</li>
                        </ul>
                      </TabPanel>
                      <TabPanel>
                        <ul className='list-disc'>
                          <li>Watson da IBM</li>
                        </ul>
                      </TabPanel>
                      <TabPanel>
                        <ul className='list-disc'>
                          <li>Windows</li>
                        </ul>
                      </TabPanel>
                      <TabPanel>
                        <ul className='list-disc'>
                          <li>MindManager</li>
                          <li>Trello</li>
                          <li>
                            <ul className='list-disc' style={{listStyleType: 'circle'}}>
                              <li style={{listStyleType: 'none'}}>Office 365</li>
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
    )
}