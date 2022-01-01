import useModal from './useModal'
import ModalConnectWallet from 'src/container/ModalConnectWallet'
import AccountModal from 'src/container/AccountModal'

const useWalletModal = (login: any, logout?: () => void, account?: string) => {
  const [onPresentConnectModal] = useModal(<ModalConnectWallet login={login} />)
  const [onPresentAccountModal] = useModal(<AccountModal logout={logout} />)
  return { onPresentConnectModal, onPresentAccountModal }
}

export default useWalletModal
