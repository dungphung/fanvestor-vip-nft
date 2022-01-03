import useModal from './useModal'
import ModalStackNFT from 'src/container/ModalStackNFT'

const useModalStackNFT = () => {
  const [onPresentModalStackNFT] = useModal(<ModalStackNFT />)

  return { onPresentModalStackNFT }
}

export default useModalStackNFT
