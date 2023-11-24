import Nav from './nav'
import Sidebar from './sidebar'
import Main from './main'
import Ads from './ads'
import Footer from './footer'

export default function Home() {
  return (
    <table className="skeleton">
      <tr className="navrow">
        <td colSpan={3}><Nav /></td>
      </tr>
      <tr className='midrow'>
        <td><Sidebar /></td>
        <td className='main'><Main /></td>
        <td><Ads /></td>
      </tr>
      <tr className='footerrow'>
        <td colSpan={3}><Footer /></td>
      </tr>
    </table>

  )
}
