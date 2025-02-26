import { useRouteError } from "react-router-dom"


export const Error = () => {
  const error=useRouteError()
  console.log(error);
  return (
    <div>
      <h1>Something Went Wrong</h1>
    </div>
  )
}
