import CheckoutEmail from '../pages/CheckoutEmail'
import CheckoutAgreement from '../pages/CheckoutAgreement'
import CheckoutPassword from '../pages/CheckoutPassword'
import CheckoutPayment from '../pages/CheckoutPayment'

import header from '../components/Header'

export const Header = header

const routes = [
  { path: '/', name: 'CheckoutEmail', Component: CheckoutEmail },
  { path: '/checkout-agreement', name: 'CheckoutAgreement', Component: CheckoutAgreement },
  { path: '/checkout-password', name: 'CheckoutPassword', Component: CheckoutPassword },
  { path: '/checkout-payment', name: 'CheckoutPayment', Component: CheckoutPayment }
]

export default routes