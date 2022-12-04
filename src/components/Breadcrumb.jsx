import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'
import { FiHome, FiChevronRight } from "react-icons/fi"

const ModifyBreadcrumb = ({ data }) => {
    return (
        <Breadcrumb mb="5" ml="1" mt="2" separator={ <FiChevronRight color='gray.500' /> }>
            <BreadcrumbItem key={ "first" }>
                <BreadcrumbLink _hover={{ textDecoration:"none" }} cursor="auto"><FiHome /></BreadcrumbLink>
            </BreadcrumbItem> 
            {
                data.map((x) => {
                    return (
                        <BreadcrumbItem key={ x.path } isCurrentPage={ x.isCurrentPage }>
                            <BreadcrumbLink _hover={{ textDecoration:"none" }} cursor="auto">{ x.label }</BreadcrumbLink>
                        </BreadcrumbItem> 
                    )
                })
            }
        </Breadcrumb>
    );
}

export default ModifyBreadcrumb