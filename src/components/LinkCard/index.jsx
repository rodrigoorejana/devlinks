import { Card } from "./styles"

export function LinkCard({ name, url }) {
  return (
    <Card href={url} target="_blank">
      {name}
    </Card>
  )
}