import React from 'react'
import { Container } from 'semantic-ui-react'
import Headroom from 'react-headroom'
import Helmet from 'react-helmet'
import 'semantic-ui-css/semantic.min.css'
import AuthProvider from '../components/Context/AuthProvider'
import Header from '../components/Header'
import Footer from '../components/Footer'

class Layout extends React.PureComponent {
  componentDidMount() {
    const cartId = localStorage.getItem('mcart')

    if (!cartId) {
      const cartId = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'.replace(/[x]/g, () =>
        ((Math.random() * 16) | 0).toString(16)
      )
      localStorage.setItem('mcart', cartId)
    }

    this.setState({
      cartId,
    })
  }

  render() {
    const { location, children } = this.props

    return (
      <AuthProvider>
        <Helmet>
          <html lang="en" />
        </Helmet>
        <Headroom>
          <Header location={location} />
        </Headroom>
        <Container text style={{ paddingTop: '2em' }}>
          {children()}
        </Container>
        <Footer />
      </AuthProvider>
    )
  }
}

export default Layout
