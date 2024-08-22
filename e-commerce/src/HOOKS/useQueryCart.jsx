/* eslint-disable no-unused-vars */

import { useQuery } from "@tanstack/react-query";

export default function useQueryCart(key ,fn) {
 
   return useQuery({ queryKey:[key] ,queryFn:fn , select:(data)=>data?.data})
}
