import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
  
  const FinancialTable = () => {
    const data = [
      {
        site: "Kankan",
        irradiation: "2085,4",
        ratio: "75%",
        puissance: "150",
        energie: "234 607 500",
      },
      {
        site: "Siguiri",
        irradiation: "2085,3",
        ratio: "75%",
        puissance: "150",
        energie: "227 981 250",
      },
      {
        site: "Linsan",
        irradiation: "2077,31",
        ratio: "75%",
        puissance: "100",
        energie: "155 798 250",
      },
      {
        site: "Sangaredji",
        irradiation: "1940,6",
        ratio: "75%",
        puissance: "80",
        energie: "116 436 000",
      },
      {
        site: "Kouroussa",
        irradiation: "2149,8",
        ratio: "75%",
        puissance: "70",
        energie: "112 864 500",
      },
      {
        site: "Tougue",
        irradiation: "2136,86",
        ratio: "75%",
        puissance: "45",
        energie: "72 119 025",
      },
      {
        site: "Pita",
        irradiation: "2026,5",
        ratio: "75%",
        puissance: "10",
        energie: "15 198 750",
      }
    ];
  
    return (
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Sites</TableHead>
              <TableHead>Irradiation (KMH/M²/AN)</TableHead>
              <TableHead>Ratio de performance</TableHead>
              <TableHead>Puissance (MW)</TableHead>
              <TableHead>Energie (KWH/AN)</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.site}>
                <TableCell className="font-medium">{row.site}</TableCell>
                <TableCell>{row.irradiation}</TableCell>
                <TableCell>{row.ratio}</TableCell>
                <TableCell>{row.puissance}</TableCell>
                <TableCell>{row.energie}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  };
  
  export default FinancialTable;