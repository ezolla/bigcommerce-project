import styled from 'styled-components'

import Image from 'next/image'

import { Entry as IEntry } from 'safety/interfaces'

interface Props extends React.HTMLProps<HTMLDivElement> {
  entry: IEntry
}

const Entry = ({ entry }: Props) => {
  return (
    <a href={entry.url.value} target={entry.url.target}>
      <StyledEntry>
        <div>
          <Image
            src={entry.image.url}
            alt={entry.image.title}
            width={entry.image.width}
            height={entry.image.height}
          />
        </div>

        <h2>{entry.title}</h2>
      </StyledEntry>
    </a>
  )
}

export default Entry

const StyledEntry = styled.div`
  div {
    border: 1px solid var(--color-mercury);
    margin-bottom: 12px;
    transition: 0.24s ease;
  }

  :hover {
    div {
      border: 1px solid var(--color-black);
    }
  }
`
