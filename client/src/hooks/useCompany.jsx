import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";



const useCompany = () => {
    const axiosPublic = useAxios()

    const { data: company = [], isPending: loading, refetch } = useQuery({
        queryKey: ['company'],
        queryFn: async () => {
            const res = await axiosPublic.get('/company')
            return res.data
        }
    })


    return [company, loading, refetch]
};

export default useCompany;