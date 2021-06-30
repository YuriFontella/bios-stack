import Form from '@/src/components/pages/networks/form'

import { useStore } from '@/src/contexts/store'

import Loader from '@/src/libs/loader'

const Index = () => {

  const { state } = useStore()

  return (
    <Loader
      source={state?.user}
      component={(item) =>
        <Form item={item} />
      }
    />
  )
}

export default Index