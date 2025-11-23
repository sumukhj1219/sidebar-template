import React from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { flexRender, Row, Table as ReactTable, ColumnDef } from '@tanstack/react-table'
import { SortableContext, useSortable, verticalListSortingStrategy } from '@dnd-kit/sortable'
import {z} from "zod"
import { schema } from '../types/orders-types'
import { CSS } from "@dnd-kit/utilities"
import { UniqueIdentifier } from '@dnd-kit/core'

interface OrdersTableListProps {
    table:  ReactTable<z.infer<typeof schema>>
    dataIds: UniqueIdentifier[]
    columns: ColumnDef<z.infer<typeof schema>>[]
}

function DraggableRow({ row }: { row: Row<z.infer<typeof schema>> }) {
    const { transform, transition, setNodeRef, isDragging } = useSortable({
        id: row.original.orderId,
    })

    return (
        <TableRow
            data-state={row.getIsSelected() && "selected"}
            data-dragging={isDragging}
            ref={setNodeRef}
            className="relative z-0 data-[dragging=true]:z-10 data-[dragging=true]:opacity-80"
            style={{
                transform: CSS.Transform.toString(transform),
                transition: transition,
            }}
        >
            {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id }>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
            ))}
        </TableRow>
    )
}

const OrdersTableList = ({table, dataIds, columns}:OrdersTableListProps) => {
    return (
        <Table>
            <TableHeader className="bg-muted sticky top-0 z-10">
                {table.getHeaderGroups().map((headerGroup) => (
                    <TableRow key={headerGroup.id}>
                        {headerGroup.headers.map((header) => {
                            return (
                                <TableHead key={header.id} colSpan={header.colSpan}>
                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(
                                            header.column.columnDef.header,
                                            header.getContext()
                                        )}
                                </TableHead>
                            )
                        })}
                    </TableRow>
                ))}
            </TableHeader>
            <TableBody className="**:data-[slot=table-cell]:first:w-8">
                {table.getRowModel().rows?.length ? (
                    <SortableContext
                        items={dataIds}
                        strategy={verticalListSortingStrategy}
                    >
                        {table.getRowModel().rows.map((row) => (
                            <DraggableRow key={row.id} row={row} />
                        ))}
                    </SortableContext>
                ) : (
                    <TableRow>
                        <TableCell
                            colSpan={columns.length}
                            className="h-24 text-center"
                        >
                            No results.
                        </TableCell>
                    </TableRow>
                )}
            </TableBody>
        </Table>
    )
}

export default OrdersTableList