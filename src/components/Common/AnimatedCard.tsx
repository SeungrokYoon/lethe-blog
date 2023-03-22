import styled from '@emotion/styled'
import { FunctionComponent } from 'react'

const Card = styled.div`
  &.card-background {
    background: white;
    padding: 1rem;
    border: 1px solid #777;
    border-radius: 0.25rem;
  }
  div.card-header {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
  div.card-body {
    font-size: 0.9rem;
  }
  div.card-footer {
    margin-top: 0.5rem;
  }
`

const CardBtn = styled.button`
  &.btn {
    --color: hsl(200, 50%, 50%);
    background-color: var(--color);
    color: white;
    border: none;
    font-size: 1rem;
    padding: 0.5em 0.75em;
    border-radius: 0.25em;
    cursor: pointer;
  }

  &.btn:hover,
  &.btn:focus {
    background: hsl(200, 50%, 60%);
  }

  &.btn.btn-outline {
    background: none;
    border: 1px solid var(--color);
    color: var(--color);
  }

  &.btn.btn-outline:hover,
  &.btn.btn-outline:focus {
    background: hsl(200, 50%, 90%);
  }

  &.btn + .btn {
    margin-left: 0.5rem;
  }
`

const AnimatedCard: FunctionComponent = () => {
  return (
    <Card className="card-background">
      <div className="card-header">Hello!</div>
      <div className="card-body">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla veniam
        voluptatum repellat sequi, inventore omnis quam cumque laborum
        laboriosam asperiores saepe, itaque quo dignissimos reiciendis officia,
        blanditiis placeat quisquam! Soluta.
      </div>
      <div className="card-footer">
        <CardBtn className="btn">Details</CardBtn>
        <CardBtn className="btn btn-outline">Contact Seller</CardBtn>
      </div>
    </Card>
  )
}

export default AnimatedCard
