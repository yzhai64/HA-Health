import React from 'react'

export const About: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">关于我们</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        HA Health 致力于为您提供最优质的健康产品和服务。我们的目标是帮助您改善生活质量，享受更健康的生活。
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        我们与全球领先的健康产品供应商合作，确保我们的产品质量卓越，安全可靠。
      </p>
      <p className="text-gray-700 leading-relaxed">
        感谢您选择 HA Health，我们期待与您一同迈向健康之路。
      </p>
    </div>
  )
}
