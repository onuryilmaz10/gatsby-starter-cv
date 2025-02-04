import React from 'react'
import styled, { css } from 'styled-components'
import { Container, Row, Col } from 'react-awesome-styled-grid'
import siteConfig, { works } from '../../data/siteConfig'
import { withPrefix } from "gatsby"
import loadable from '@loadable/component'
import Hero from '../components/hero'
import SEO from '../components/SEO'
import Wrapper from '../components/wrapper'

const Layout = loadable(() => import('../components/layout'))

const Image = styled.img`
  max-height: 220px;
  max-width: 220px;
  object-fit: cover;
  object-position: center center;
  border-radius: 10px;
  box-shadow: 24px 47px 79px -21px rgba(0,0,0,0.51);
`

const JobCard = styled.a`
  text-decoration: none;
  color: inherit;

  ${({ href }) => href && css`
    &:hover ${Image}{
      transition: transform .5s;
      transform: translateY(-5px);
    }
  `}
`

const Works = ({ className, location }) => {
  const title = "Works"
  const { keywords, works } = siteConfig
  return (
    <Layout location={location}>
      <SEO
        title={title}
        keywords={keywords}
      />

      <Hero
        heroImg={withPrefix('/images/covermini.jpg')}
        title={title}
      />

      <Wrapper className={className}>
        <Container className="page-content" fluid>
          <Row>
            {works.map(job => (
              <Col
                key={job.description}
                align="center"
              >
                <JobCard
                  as={job.url ? "a" : "div"}
                  href={job.url}
                  target="_blank"
                >
                <Col
                  align="center"
                  >
                <Image src={withPrefix(job.image)} />
                <p>{job.description}</p>
                </Col>
                  
                </JobCard>
              </Col>
            ))}
          </Row>
        </Container>
      </Wrapper>
    </Layout>
  )
}

export default styled(Works)`
  .page-content {
    max-width: 100%;
    margin-bottom: 40px;
  }

`
