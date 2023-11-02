import Button from '../Button/Button';
import { ClipLoader } from 'react-spinners';

const AppForm = ({ children, handleSubmit, isSubmitting, isSubmitButtonLoading, submitButtonLabel }) => {
  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-96">
      {children}
      <Button
        variant={"primary"}
        type="submit"
        className={`w-full ${isSubmitting && "opacity-60"} `}>
        <ClipLoader
          color={"4A90E2"}
          loading={isSubmitButtonLoading}
          size={20}
        />
        {isSubmitting ? null : submitButtonLabel}
      </Button>
    </form>
  )
}

export default AppForm;