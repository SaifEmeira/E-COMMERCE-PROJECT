/* eslint-disable no-unused-vars */
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { clearCart } from '../APIS/CartApi';

export default function useMutationCart(fn) {
 
    const queryClient = useQueryClient()

  return  useMutation({mutationFn:fn , 
    onSuccess:()=>{
        queryClient.invalidateQueries({ queryKey: ['getCart'] })
        if (fn==clearCart) {
          queryClient.setQueriesData('getCart',null)
        }

    }
  })


}
