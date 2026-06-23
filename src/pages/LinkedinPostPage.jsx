import React, { useState } from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  background-color: #1d2226;
  color: rgba(255, 255, 255, 0.9);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  padding: 20px;
`;

const PostContainer = styled.div`
  background-color: #1d2226;
  max-width: 600px;
  width: 100%;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 8px;
  padding: 16px;
  box-sizing: border-box;
`;

const Header = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 12px;
`;

const Avatar = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: #404040;
  margin-right: 12px;
  overflow: hidden;
  flex-shrink: 0;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const HeaderInfo = styled.div`
  flex-grow: 1;
`;

const HeaderTitle = styled.p`
  font-size: 14px;
  margin: 0 0 12px 0;
  color: rgba(255, 255, 255, 0.6);
  
  strong {
    color: rgba(255, 255, 255, 0.9);
  }
`;

const NameContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Name = styled.p`
  font-size: 14px;
  font-weight: 600;
  margin: 0;
  color: rgba(255, 255, 255, 0.9);
`;

const SubText = styled.span`
  font-weight: normal;
  color: rgba(255, 255, 255, 0.6);
`;

const Time = styled.p`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.6);
  margin: 2px 0 0 0;
  display: flex;
  align-items: center;
  gap: 4px;
`;

const PostContent = styled.div`
  font-size: 14px;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 16px;
  
  p {
    margin: 0 0 20px 0;
  }
  
  p:last-child {
    margin-bottom: 0;
  }
  
  a {
    color: #70b5f9;
    text-decoration: none;
    font-weight: 600;
  }
  
  a:hover {
    text-decoration: underline;
  }
`;

const Hashtag = styled.span`
  color: #70b5f9;
  font-weight: 600;
`;

const BannerLink = styled.a`
  text-decoration: none;
  color: inherit;
  display: block;
  cursor: pointer;
`;

const ImageContainer = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 8px 8px 0 0;
  overflow: hidden;
  margin-top: 16px;
  
  img {
    width: 100%;
    display: block;
  }
`;

const LinkBox = styled.div`
  background-color: #23282c;
  padding: 12px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-top: none;
  border-radius: 0 0 8px 8px;
`;

const LinkBoxInfo = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

const LinkBoxLogo = styled.div`
  width: 32px;
  height: 32px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  font-weight: bold;
  color: #2a0b5a;
  font-style: italic;
`;

const LinkBoxText = styled.div`
  h4 {
    margin: 0;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.9);
  }
  p {
    margin: 2px 0 0 0;
    font-size: 12px;
    color: rgba(255, 255, 255, 0.6);
  }
`;

const ApplyBtn = styled.div`
  background-color: transparent;
  color: #70b5f9;
  border: 1px solid #70b5f9;
  padding: 6px 16px;
  border-radius: 16px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: rgba(112, 181, 249, 0.1);
  }
`;

const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 8px;
  padding-top: 4px;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  color: rgba(255, 255, 255, 0.6);
  font-size: 12px;
  font-weight: 600;
`;

const ActionItem = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 4px;
  transition: background 0.15s;
  color: ${({ $liked }) => $liked ? '#70b5f9' : 'inherit'};
  
  &:hover {
    background: rgba(255, 255, 255, 0.08);
    color: ${({ $liked }) => $liked ? '#70b5f9' : 'rgba(255, 255, 255, 0.9)'};
  }
`;

const LikeIcon = ({ liked }) => liked ? (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="#70b5f9">
    <path d="M19.46 11l-3.91-3.91a7 7 0 01-1.69-2.74l-.49-1.47A2.76 2.76 0 0010.76 1 2.75 2.75 0 008 3.74v1.12a9.19 9.19 0 00.46 2.88L8.89 9H4.11A2.11 2.11 0 002 11.11V21a2 2 0 002 2h15a1.5 1.5 0 001.5-1.5v-8a1.5 1.5 0 00-1.04-1.5z"></path>
  </svg>
) : (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M19.46 11l-3.91-3.91a7 7 0 01-1.69-2.74l-.49-1.47A2.76 2.76 0 0010.76 1 2.75 2.75 0 008 3.74v1.12a9.19 9.19 0 00.46 2.88L8.89 9H4.11A2.11 2.11 0 002 11.11V21a2 2 0 002 2h15a1.5 1.5 0 001.5-1.5v-8a1.5 1.5 0 00-1.04-1.5z"></path>
  </svg>
);

const LinkedinPostPage = () => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const handleLike = () => {
    if (liked) {
      setLiked(false);
      setLikeCount(prev => prev - 1);
    } else {
      setLiked(true);
      setLikeCount(prev => prev + 1);
    }
  };

  return (
    <PageContainer>
      <PostContainer>
        <HeaderTitle><strong>Ana García (Recruiter)</strong> ha publicado esto:</HeaderTitle>
        
        <Header>
          <Avatar>
            <img src="https://i.pravatar.cc/150?img=47" alt="Ana García" />
          </Avatar>
          <HeaderInfo>
            <NameContainer>
              <Name>Ana García <SubText>(Recruiter) | Tech Talent Acquisition | S-Code</SubText></Name>
              <div style={{ color: 'rgba(255, 255, 255, 0.6)', fontWeight: 'bold', cursor: 'pointer' }}>•••</div>
            </NameContainer>
            <Time>1h • 🌎</Time>
          </HeaderInfo>
        </Header>

        <PostContent>
          <p>🚀 ¡Sumate a S-Code!<br />Desarrollador Full Stack Junior</p>

          <p>¿Sos estudiante avanzado o graduado reciente de ingeniería en Sistemas, Informática o carreras afines?</p>

          <p>En S-Code estamos construyendo una startup tecnológica enfocada en el desarrollo de software, soluciones web modernas e inteligencia artificial. Buscamos personas con ganas de aprender, crecer profesionalmente y formar parte de un equipo que apuesta por la innovación desde el primer día.</p>

          <p>💻 Tecnologías con las que vas a trabajar:<br />
          • Java<br />
          • Spring Boot<br />
          • React<br />
          • APIs REST<br />
          • SQL<br />
          • Docker<br />
          • Inteligencia Artificial</p>

          <p>🎯 Requisitos:<br />
          • Estudiante avanzado o graduado reciente.<br />
          • Conocimientos básicos de programación.<br />
          • Conocimientos de bases de datos SQL.<br />
          • Interés por el desarrollo web y las nuevas tecnologías.<br />
          • No se requiere experiencia laboral previa.</p>

          <p>✅ ¿Qué ofrecemos?<br />
          • Modalidad 100% remota.<br />
          • Capacitación continua y acceso a certificaciones.<br />
          • Participación en proyectos reales desde el primer día.<br />
          • Horarios flexibles.<br />
          • Plan de carrera y crecimiento profesional.<br />
          • Excelente ambiente de trabajo colaborativo.</p>

          <p>🚀 En S-Code creemos que el talento se desarrolla. Por eso buscamos personas con potencial, iniciativa y ganas de construir soluciones tecnológicas que generen impacto.</p>

          <p>📍 Argentina<br />
          ⏱️ Jornada Full Time</p>

          <p><a href="/login" target="_blank" rel="noopener noreferrer">Postulate ahora</a> y comenzá tu carrera profesional en una startup tecnológica en crecimiento.<br />
          <Hashtag>#Java</Hashtag> <Hashtag>#SpringBoot</Hashtag> <Hashtag>#React</Hashtag> <Hashtag>#FullStack</Hashtag></p>
        </PostContent>

        <BannerLink href="/login" target="_blank" rel="noopener noreferrer">
          <ImageContainer>
            <img src="/Vacante.png" alt="Vacante Desarrollador Full Stack Junior" />
          </ImageContainer>
          <LinkBox>
            <LinkBoxInfo>
              <LinkBoxLogo>S</LinkBoxLogo>
              <LinkBoxText>
                <h4>S-Code | Soluciones Tecnológicas e IA</h4>
                <p>https://s-code.com/carreras/full-stack-jr</p>
              </LinkBoxText>
            </LinkBoxInfo>
            <ApplyBtn>Apply Now</ApplyBtn>
          </LinkBox>
        </BannerLink>

        <ActionsContainer>
          <ActionItem $liked={liked} onClick={handleLike}>
            <LikeIcon liked={liked} />
            Like {likeCount > 0 && <span style={{ marginLeft: 2 }}>{likeCount}</span>}
          </ActionItem>
          <ActionItem>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <path d="M7 9h10v1H7zm0 4h7v-1H7zm14-1.5V20c0 .55-.45 1-1 1H6.5c-.15 0-.28-.04-.4-.08L2 24v-4H2c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h18c1.1 0 2 .9 2 2v7.5z"></path>
            </svg>
            Comment
          </ActionItem>
          <ActionItem>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <path d="M24 12a1.18 1.18 0 00-.36-.84L14 2v4.29a10.4 10.4 0 00-10.15 11c-.13 1.52.26 3.03 1.1 4.29L5.4 22l.53-.84A9.15 9.15 0 0114 14.86V19l9.64-9.16A1.18 1.18 0 0024 12z"></path>
            </svg>
            Share
          </ActionItem>
        </ActionsContainer>
      </PostContainer>
    </PageContainer>
  );
};

export default LinkedinPostPage;
