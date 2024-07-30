import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', sessions: 4, duration: 20 },
  { name: 'Tue', sessions: 3, duration: 25 },
  { name: 'Wed', sessions: 5, duration: 30 },
  { name: 'Thu', sessions: 2, duration: 15 },
  { name: 'Fri', sessions: 4, duration: 35 },
  { name: 'Sat', sessions: 6, duration: 40 },
  { name: 'Sun', sessions: 3, duration: 30 },
];

const MeditationChart = () => {
  return (
    <div className="w-full h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis yAxisId="left" />
          <YAxis yAxisId="right" orientation="right" />
          <Tooltip />
          <Legend />
          <Line yAxisId="left" type="monotone" dataKey="sessions" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line yAxisId="right" type="monotone" dataKey="duration" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MeditationChart;
