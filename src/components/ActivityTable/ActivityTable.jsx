import {
  DataTable,
  DataTableBody,
  DataTableCell,
  DataTableContent,
  DataTableHead,
  DataTableHeadCell,
  DataTableRow
} from '@rmwc/data-table'

const ActivityTable = () => {

  return (
    <DataTable>
      <DataTableContent>
        <DataTableHead>

          <DataTableRow>
            <DataTableHeadCell>Datum</DataTableHeadCell>
            <DataTableHeadCell>Aktivitet</DataTableHeadCell>
            <DataTableHeadCell>Projekt</DataTableHeadCell> 
            <DataTableHeadCell>Timmar</DataTableHeadCell>       
          </DataTableRow>
        </DataTableHead>
        <DataTableBody>
          <DataTableRow>
            <DataTableCell>Cell 1</DataTableCell>
          </DataTableRow>
        </DataTableBody>
      </DataTableContent>
    </DataTable>
  )
}

export default ActivityTable