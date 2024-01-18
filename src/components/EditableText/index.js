import {useState} from 'react'

import {
  Container,
  Heading,
  Button,
  Input,
  Paragraph,
  InputButtonContainer,
} from './style'

const EditableTextInput = () => {
  const [isSaved, updateSavedValue] = useState(false)
  const [inputValue, updateInput] = useState('')

  const onClickingButton = () => {
    updateSavedValue(!isSaved)
  }

  const onChangingInput = event => {
    updateInput(event.target.value)
  }

  return (
    <Container>
      <Heading>Editable Text Input</Heading>
      <InputButtonContainer>
        {!isSaved ? (
          <Input type="text" value={inputValue} onChange={onChangingInput} />
        ) : (
          <Paragraph>{inputValue}</Paragraph>
        )}
        <Button type="button" onClick={onClickingButton}>
          {isSaved ? 'Edit' : 'Save'}
        </Button>
      </InputButtonContainer>
    </Container>
  )
}

export default EditableTextInput
