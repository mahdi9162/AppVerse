import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const AppChart = ({ ratings}) => {
  const data = ratings;

  return (
    <>
      <div className="my-10 p-6 rounded-xl bg-white/70 backdrop-blur-sm shadow-[0_4px_18px_rgba(0,0,0,0.05)] border border-white/50">
        <h3 className="text-lg md:text-xl font-semibold font-heading text-slate-800 mb-4">Ratings Breakdown</h3>

        <div className="w-full h-64 md:h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 10 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="name" tick={{ fill: '#64748b' }} />
              <YAxis tick={{ fill: '#64748b' }} />
              <Tooltip
                contentStyle={{
                  borderRadius: '10px',
                  border: '1px solid #e2e8f0',
                  background: 'rgba(255,255,255,0.9)',
                }}
              />
              <Bar dataKey="count" fill="url(#barGradient)" radius={[6, 6, 0, 0]} />
              <defs>
                <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#fb923c" />
                  <stop offset="100%" stopColor="#f97316" />
                </linearGradient>
              </defs>
              <Legend verticalAlign="top" align="right" />

            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
};

export default AppChart;
