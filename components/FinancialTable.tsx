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
        prix: "1 500 GNF",
        revenuGNF: "351 911 250 000 GNF",
      },
      {
        site: "Siguiri",
        irradiation: "2085,3",
        ratio: "75%",
        puissance: "150",
        energie: "227 981 250",
        prix: "1 500 GNF",
        revenuGNF: "341 971 875 000 GNF",
      },
      {
        site: "Linsan",
        irradiation: "2077,31",
        ratio: "75%",
        puissance: "100",
        energie: "155 798 250",
        prix: "1 500 GNF",
        revenuGNF: "233 697 375 000 GNF",
      },
      {
        site: "Sangaredji",
        irradiation: "1940,6",
        ratio: "75%",
        puissance: "80",
        energie: "116 436 000",
        prix: "1 500 GNF",
        revenuGNF: "174 654 000 000 GNF",
      },
      {
        site: "Kouroussa",
        irradiation: "2149,8",
        ratio: "75%",
        puissance: "70",
        energie: "112 864 500",
        prix: "1 500 GNF",
        revenuGNF: "169 296 750 000 GNF",
      },
      {
        site: "Tougue",
        irradiation: "2136,86",
        ratio: "75%",
        puissance: "45",
        energie: "72 119 025",
        prix: "1 500 GNF",
        revenuGNF: "108 178 537 500 GNF",
      },
      {
        site: "Pita",
        irradiation: "2026,5",
        ratio: "75%",
        puissance: "10",
        energie: "15 198 750",
        prix: "1 500 GNF",
        revenuGNF: "22 798 125 000 GNF",
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
              <TableHead>Prix (FGN/KWH)</TableHead>
              <TableHead>Revenu annuel (FGN)</TableHead>
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
                <TableCell>{row.prix}</TableCell>
                <TableCell className="min-w-[200px]">{row.revenuGNF}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  };
  
  export default FinancialTable;