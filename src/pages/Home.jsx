/* eslint-disable react/prop-types */


const Home = ({username,budgets}) => {

  return (
    <div className="dashboard">
    <h1>Welcome back, <span className="accent">{username}</span></h1>
    <div className="grid-sm">
        {budgets}
        <div className="grid-lg">
            <div className="flex-lg">
                
            </div>
        </div>
    </div>

    </div>
  )
}

export default Home