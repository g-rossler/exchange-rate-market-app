import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';


function Chart(props) {
  const data = props.data
  console.log(data)

  /*
  const data = [
    {
      name: 'Page A',
      uv: 4000,
    },
    {
      name: 'Page B',
      uv: 3000,
    },
    {
      name: 'Page C',
      uv: 2000,
    },
    {
      name: 'Page D',
      uv: 2780,
    },
    {
      name: 'Page E',
      uv: 1890,
    },
    {
      name: 'Page F',
      uv: 2390,
    },
    {
      name: 'Page G',
      uv: 3490,
    },
  ];
  */
  function CustomTooltip({ payload, label, active }) {
    if (active) {
      return (
        <div className="custom-tooltip" >
          <p className="label">{`${label} : ${props.futureCurrency} ${payload[0].value}`}</p>
        </div>
      );
    }
  
    return null;
  }
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="fecha" />
        <YAxis type="number" tickCount={12} domain={[dataMin => Math.round(dataMin * 95) /100, dataMax => Math.round(dataMax * 102) / 100]}/>
        <Tooltip content={<CustomTooltip />} wrapperStyle={{ width: 200, backgroundColor: '#ccc' }}/>
        <Area type="monotone" dataKey="Price" stroke="#281dfa" fill="#5951f7" />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default Chart