import styled from 'styled-components'

import { Loading } from 'components/Icons'
import { spin } from 'components/Animations'

interface Props extends React.HTMLProps<HTMLButtonElement> {
  isLoading?: boolean
  ref?: any
  as?: any
}

const Button: React.FC<Props> = ({
  isLoading,
  children,
  ...props
}: Props): JSX.Element => {
  return (
    <StyledButton isLoading={isLoading || false} {...props}>
      {isLoading ? (
        <div className='loading'>
          <Loading /> {children}
        </div>
      ) : (
        children
      )}
    </StyledButton>
  )
}

export default Button

const StyledButton = styled.button<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 12px;
  color: var(--color-dove);
  background: var(--color-white);
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  border: 1px solid var(--color-mercury);
  border-radius: 5px;
  transition: 0.15s ease;
  user-select: none;

  :hover {
    color: var(--color-black);
    border: 1px solid var(--color-black);
    cursor: pointer;
  }

  .loading {
    display: flex;
    align-items: center;

    svg {
      animation: ${spin} 1s infinite linear;
      fill: var(--color-dove);
    }
  }
`
