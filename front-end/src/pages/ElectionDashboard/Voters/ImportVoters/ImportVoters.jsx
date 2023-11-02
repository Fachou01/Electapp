import { ClipLoader } from 'react-spinners';
import Modal from '../../../../components/Modal/Modal';
import Button from '../../../../components/Button/Button';
import useImportVoters from './logic/useImportVoters';

import "./ImportVoters.css";

const ImportVoters = ({ showModal, setShowModal, getVoters }) => {


  const { loading, fileRef, importVoters } = useImportVoters(setShowModal, getVoters);

  const handleShowModal = () => {
    setShowModal(!showModal);
  }

  return (
    <Modal showModal={showModal} handleShowModal={handleShowModal} title={"Import Voters"}>
      {/* {loading && !error && <FormBodyLoading />} */}
      <div className="space-y-6 w-[600px]">
        <div className='flex gap-5'>
          <div className='w-1/12 '><span className='rounded-full p-1 bg-secondary-100 align-top block text-light-100 text-center'>1</span></div>
          <div className='w-11/12 '>
            <h2 className='font-bold pb-3 text-lg'>Read import instructions</h2>
            <p>To get started, click here to read the instructions on how to import voters.</p>
          </div>
        </div>
        <div className='flex gap-5'>
          <div className='w-1/12 '><span className='rounded-full p-1 bg-secondary-100 align-top block text-light-100 text-center'>2</span></div>
          <div className='w-11/12 '>
            <h2 className='font-bold pb-3 text-lg'>Select the import file from your computer</h2>
            <input className="fileUploadInput pb-3" id="fileUploader" type="file" ref={fileRef}></input>
          </div>
        </div>
        <Button onClick={importVoters} disabled={loading} type='submit' variant={"primary"}>
          {loading ? <ClipLoader color='#FFF' size={18} loading={loading} /> : <span>Import</span>}
        </Button>
      </div>

    </Modal>
  )
}
export default ImportVoters;