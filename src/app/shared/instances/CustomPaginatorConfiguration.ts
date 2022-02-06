import { MatPaginatorIntl } from '@angular/material';

export function CustomPaginator() {
  const customPaginatorIntl = new MatPaginatorIntl();

  customPaginatorIntl.itemsPerPageLabel = 'Elementos por página';
  customPaginatorIntl.firstPageLabel = 'Primero';
  customPaginatorIntl.lastPageLabel = 'Último';
  customPaginatorIntl.nextPageLabel = 'Siguiente';
  customPaginatorIntl.previousPageLabel = 'Anterior';
  customPaginatorIntl.getRangeLabel = (page, pageSize, length) => {
    if (length === 0 || pageSize === 0) {
      return '0 de ' + length;
    }
    length = Math.max(length, 0);
    const startIndex = page * pageSize;
    const endIndex = startIndex < length ?
      Math.min(startIndex + pageSize, length) : startIndex + pageSize;
    return (startIndex + 1) + ' - ' + endIndex + ' de ' + length;
  };

  return customPaginatorIntl;
}
