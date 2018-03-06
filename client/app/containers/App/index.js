import React from 'react'
import { Route } from 'react-router'

import { 
  loadableContainer,
  loadableComponent
} from 'services/loadable'
import DefaultLayout from 'containers/App/DefaultLayout'

let HomePage = loadableContainer('HomePage')
let Profile = loadableContainer('ProfilePage')
let ProduceListPage = loadableContainer('ProduceListPage')
let SignIn = loadableContainer('SignIn')
let SignUp = loadableContainer('SignUp')
let Header = loadableComponent('Header')

let AboutPage = loadableContainer('AboutPage')
let ProduceCreatePage = loadableContainer('CreateProducePage')
let CheckoutPage = loadableContainer('CheckoutPage')

let ProduceEditDetailPage = loadableContainer('EditProducePage/edit-detail')
let ProduceEditPreviewPage = loadableContainer('EditProducePage/edit-preview')

class App extends React.Component {
  render() {
    return (
      <div>
        <Route exact path="/sign-in" component={SignIn} />
        <Route exact path="/sign-up" component={SignUp} />
        <DefaultLayout exact path="/" component={HomePage} />
        <DefaultLayout path="/about" component={AboutPage} />
        <DefaultLayout path="/profile" component={Profile} />
        {/*<DefaultLayout exact path="/profile/:id/security" component={ProfileSecurityPage} />
        <DefaultLayout exact path="/profile/:id/history" component={ProfileHistoryPage} />
        <DefaultLayout exact path="/profile/:id/message" component={ProfileMessagePage} />*/}
        <DefaultLayout path="/produces" component={ProduceListPage} />
        <DefaultLayout path="/create-produce" component={ProduceCreatePage} />
        {/*<DefaultLayout path="/create-produce/detail" component={ProduceCreateDetailPage} />
        <DefaultLayout path="/create-produce/preview" component={ProduceCreatePreviewPage} />*/}
        <DefaultLayout path="/checkout" component={CheckoutPage} />
        <DefaultLayout path="/edit-produce/:id/detail" component={ProduceEditDetailPage} />
        <DefaultLayout path="/edit-produce/:id/preview" component={ProduceEditPreviewPage} />
      </div>
    )
  }
}

export default App
