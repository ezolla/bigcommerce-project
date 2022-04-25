import React from 'react'
import styled from 'styled-components'

const PageWrapper = ({ children }: React.HTMLProps<HTMLDivElement>) => {
  return <StyledPageWrapper>{children}</StyledPageWrapper>
}

export default PageWrapper

const StyledPageWrapper = styled.main`
  max-width: 640px;
  margin: 0 auto;
  padding: 60px 24px 100px;

  @media (max-width: 680px) {
    padding: 40px 24px 100px;
  }
`
