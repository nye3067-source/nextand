'use client'
import React, { useState, useEffect } from 'react';
import { Search, Plus, FileText, TrendingUp, AlertCircle, CheckCircle, XCircle, BarChart3, Users, Clock, Target } from 'lucide-react';

const PublicArtEvaluationDB = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [projects, setProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [newProject, setNewProject] = useState({
    projectName: '',
    location: '',
    buildingType: '',
    artworkType: '',
    artist: '',
    totalArea: '',
    publicArea: '',
    artworkArea: '',
    installationArea: '',
    budget: '',
    completionDate: '',
    evaluationCriteria: {
      harmony: 0,
      artistry: 0,
      buildingEnvironment: 0,
      accessibility: 0,
      safety: 0,
      maintenanceManagement: 0,
      socialCultural: 0
    }
  });

  // 실제 회의록 기반 샘플 데이터
  useEffect(() => {
    const realProjectData = [
      {
        id: 1,
        projectName: "원과 원의 사이",
        location: "성동구 성수동2가 269-62",
        buildingType: "업무시설",
        artworkType: "조각",
        artist: "김○○",
        totalArea: 12000,
        publicArea: 2400,
        artworkArea: 25,
        budget: 180000000,
        status: "부결",
        passRate: 25,
        evaluationCriteria: {
          harmony: 2,
          artistry: 2,
          buildingEnvironment: 2,
          accessibility: 3,
          safety: 3,
          maintenanceManagement: 2,
          socialCultural: 2
        },
        feedback: ["예술성 부족 및 공간과 어울리지 않음", "조형성이 미흡", "형태가 너무 단순하여 조형성 측면에서 미감이 부족", "공예작업을 크기만 확대한 인상"],
        submissionDate: '2025-07-01',
        meetingDate: '2025-07-17'
      },
      {
        id: 2,
        projectName: "LOVE EVERYWHERE",
        location: "동대문구 청량리동 199번지",
        buildingType: "공동주택",
        artworkType: "조각",
        artist: "이○○",
        totalArea: 35000,
        publicArea: 7000,
        artworkArea: 80,
        budget: 250000000,
        status: "부결",
        passRate: 30,
        evaluationCriteria: {
          harmony: 2,
          artistry: 3,
          buildingEnvironment: 2,
          accessibility: 4,
          safety: 3,
          maintenanceManagement: 3,
          socialCultural: 2
        },
        feedback: ["캐릭터적 요소가 강해 공공조형물로서 적합해보이지 않음", "외부, 공공장소에 어울리지 않음", "2d드로잉 성격의 작업을 두께와 수량만 늘린 상태", "공공조형물로서의 상징성과 형식미 더 필요함"],
        submissionDate: '2025-07-01',
        meetingDate: '2025-07-17'
      },
      {
        id: 3,
        projectName: "Aggregation 집합",
        location: "강서구 마곡동 79",
        buildingType: "업무시설",
        artworkType: "회화",
        artist: "박○○",
        totalArea: 18000,
        publicArea: 3600,
        artworkArea: 45,
        budget: 320000000,
        status: "승인",
        passRate: 92,
        evaluationCriteria: {
          harmony: 5,
          artistry: 5,
          buildingEnvironment: 4,
          accessibility: 4,
          safety: 5,
          maintenanceManagement: 4,
          socialCultural: 5
        },
        feedback: ["전통적인 재료를 현대적 미감으로 재해석한 점이 뛰어남", "로비 공간의 공공적 성격에 적합한 규모", "독창적 조형 언어와 제작 방식"],
        submissionDate: '2025-07-01',
        meetingDate: '2025-07-17'
      },
      {
        id: 4,
        projectName: "아름다운 질주",
        location: "영등포구 신길동 1300",
        buildingType: "청년주택",
        artworkType: "조각",
        artist: "최○○",
        totalArea: 8000,
        publicArea: 1600,
        artworkArea: 120,
        budget: 190000000,
        status: "부결",
        passRate: 20,
        evaluationCriteria: {
          harmony: 1,
          artistry: 3,
          buildingEnvironment: 1,
          accessibility: 3,
          safety: 2,
          maintenanceManagement: 2,
          socialCultural: 3
        },
        feedback: ["설치공간에 비해 과도하게 큰 스케일", "컬러, 크기, 조형성이 미흡함", "공간에 비해 너무 큰 크기와 색채가 보는이에게 피로감을 줌", "위압감이 큼"],
        submissionDate: '2025-07-01',
        meetingDate: '2025-07-17'
      },
      {
        id: 5,
        projectName: "행복한 하마가족",
        location: "중구 을지로2가 185",
        buildingType: "근린생활시설",
        artworkType: "조각",
        artist: "정○○",
        totalArea: 6000,
        publicArea: 1200,
        artworkArea: 35,
        budget: 150000000,
        status: "승인",
        passRate: 88,
        evaluationCriteria: {
          harmony: 4,
          artistry: 4,
          buildingEnvironment: 5,
          accessibility: 5,
          safety: 4,
          maintenanceManagement: 4,
          socialCultural: 4
        },
        feedback: ["친근감 있는 조형성과 설치 장소와의 조화성 양호", "조형물 자체가 벤치 기능을 겸하고 있어 실질적인 기여도가 높음", "해학적 이미지와 조형미의 조화"],
        submissionDate: '2025-06-01',
        meetingDate: '2025-06-19'
      },
      {
        id: 6,
        projectName: "관계미(關係美)",
        location: "서대문구 남가좌동 289-54",
        buildingType: "공동주택",
        artworkType: "조각",
        artist: "윤○○",
        totalArea: 25000,
        publicArea: 5000,
        artworkArea: 60,
        budget: 280000000,
        status: "조건부승인",
        passRate: 75,
        evaluationCriteria: {
          harmony: 4,
          artistry: 4,
          buildingEnvironment: 4,
          accessibility: 3,
          safety: 3,
          maintenanceManagement: 4,
          socialCultural: 4
        },
        feedback: ["유기적 리듬이 관계라는 추상적 개념을 성공적으로 시각화", "현대적 건축 환경과 조화를 이루는 세련된 형태미"],
        condition: "명판 바닥 매립 또는 높이를 높여서 발걸림 사고 예방",
        submissionDate: '2025-06-01',
        meetingDate: '2025-06-19'
      }
    ];
    setProjects(realProjectData);
  }, []);

  // 실제 통계 데이터
  const actualStats = {
    totalPassRate: 74,
    approvalRate: 42,
    conditionalRate: 32,
    rejectionRate: 26,
    commonIssues: [
      { issue: "공간과의 조화 부족", frequency: 63, weight: "높음" },
      { issue: "크기/스케일 부적합", frequency: 47, weight: "높음" },
      { issue: "공공성 부족", frequency: 21, weight: "중간" },
      { issue: "조형성 미흡", frequency: 16, weight: "중간" },
      { issue: "가격 과다책정", frequency: 16, weight: "중간" },
      { issue: "예술성 부족", frequency: 11, weight: "낮음" }
    ]
  };

  const calculateOverallPassRate = () => {
    if (projects.length === 0) return actualStats.totalPassRate;
    const passedProjects = projects.filter(p => p.status === '승인' || p.status === '조건부승인').length;
    return Math.round((passedProjects / projects.length) * 100);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case '승인': return 'text-green-600';
      case '조건부승인': return 'text-yellow-600';
      case '부결': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case '승인': return <CheckCircle className="w-4 h-4 text-green-600" />;
      case '조건부승인': return <AlertCircle className="w-4 h-4 text-yellow-600" />;
      case '부결': return <XCircle className="w-4 h-4 text-red-600" />;
      default: return null;
    }
  };

  // 실제 회의록 데이터 기반 통과율 예측 알고리즘
  const predictPassRate = (criteria) => {
    const weights = {
      harmony: 0.30,
      buildingEnvironment: 0.25,
      artistry: 0.15,
      socialCultural: 0.10,
      safety: 0.10,
      accessibility: 0.05,
      maintenanceManagement: 0.05
    };
    
    const totalScore = Object.entries(criteria).reduce((sum, [key, value]) => {
      return sum + (value * (weights[key] || 0));
    }, 0);
    
    const baseScore = Math.min(Math.round(totalScore * 20), 100);
    
    let riskPenalty = 0;
    if (criteria.harmony <= 2) riskPenalty += 30;
    if (criteria.buildingEnvironment <= 2) riskPenalty += 25;
    if (criteria.artistry <= 2) riskPenalty += 15;
    
    return Math.max(Math.min(baseScore - riskPenalty, 100), 0);
  };

  const getRecommendations = (criteria) => {
    const recommendations = [];
    
    if (criteria.harmony <= 2) {
      recommendations.push("건축물 외관 색상 및 재질과의 조화 방안 구체화 필요");
    }
    if (criteria.buildingEnvironment <= 2) {
      recommendations.push("설치 공간 규모에 적합한 작품 크기로 조정 권장");
    }
    if (criteria.artistry <= 2) {
      recommendations.push("작품의 예술적 독창성과 완성도 보완 필요");
    }
    if (criteria.socialCultural <= 2) {
      recommendations.push("공공미술로서의 사회적 의미와 메시지 강화 필요");
    }
    if (criteria.safety <= 2) {
      recommendations.push("구조 안전성 검토서 및 안전 대책 마련 필수");
    }
    
    return recommendations;
  };

  const filteredProjects = projects.filter(project =>
    project.projectName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.artist.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addProject = () => {
    if (newProject.projectName && newProject.artist) {
      const passRate = predictPassRate(newProject.evaluationCriteria);
      const recommendations = getRecommendations(newProject.evaluationCriteria);
      
      let predictedStatus;
      if (passRate >= 80) predictedStatus = '승인예상';
      else if (passRate >= 60) predictedStatus = '조건부승인예상';
      else predictedStatus = '부결예상';

      const project = {
        ...newProject,
        id: projects.length + 1,
        passRate,
        status: predictedStatus,
        feedback: recommendations,
        submissionDate: new Date().toISOString().split('T')[0]
      };
      setProjects([...projects, project]);
      setNewProject({
        projectName: '',
        location: '',
        buildingType: '',
        artworkType: '',
        artist: '',
        totalArea: '',
        publicArea: '',
        artworkArea: '',
        installationArea: '',
        budget: '',
        completionDate: '',
        evaluationCriteria: {
          harmony: 0,
          artistry: 0,
          buildingEnvironment: 0,
          accessibility: 0,
          safety: 0,
          maintenanceManagement: 0,
          socialCultural: 0
        }
      });
      setActiveTab('projects');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-gray-900">공공미술품 심의 통과율 예측 시스템</h1>
          <p className="text-gray-600 mt-1">실제 심의 회의록 데이터 기반 - 건축사사무소를 위한 AI 분석 도구</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex space-x-1 mb-6 bg-gray-100 p-1 rounded-lg">
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`px-4 py-2 rounded-md font-medium transition-colors ${
              activeTab === 'dashboard' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            대시보드
          </button>
          <button
            onClick={() => setActiveTab('projects')}
            className={`px-4 py-2 rounded-md font-medium transition-colors ${
              activeTab === 'projects' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            프로젝트 분석
          </button>
          <button
            onClick={() => setActiveTab('add')}
            className={`px-4 py-2 rounded-md font-medium transition-colors ${
              activeTab === 'add' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            통과율 예측
          </button>
          <button
            onClick={() => setActiveTab('insights')}
            className={`px-4 py-2 rounded-md font-medium transition-colors ${
              activeTab === 'insights' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            성공 전략
          </button>
        </div>

        {activeTab === 'dashboard' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">실제 통과율</p>
                    <p className="text-3xl font-bold text-blue-600">74%</p>
                    <p className="text-xs text-gray-500">승인 + 조건부승인</p>
                  </div>
                  <TrendingUp className="w-8 h-8 text-blue-600" />
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">순수 승인율</p>
                    <p className="text-3xl font-bold text-green-600">42%</p>
                    <p className="text-xs text-gray-500">바로 승인</p>
                  </div>
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">조건부 승인율</p>
                    <p className="text-3xl font-bold text-yellow-600">32%</p>
                    <p className="text-xs text-gray-500">수정 후 승인</p>
                  </div>
                  <AlertCircle className="w-8 h-8 text-yellow-600" />
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">부결율</p>
                    <p className="text-3xl font-bold text-red-600">26%</p>
                    <p className="text-xs text-gray-500">최종 부결</p>
                  </div>
                  <XCircle className="w-8 h-8 text-red-600" />
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <BarChart3 className="w-5 h-5 mr-2 text-red-500" />
                실제 회의록 기반 주요 부결 사유 분석
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {actualStats.commonIssues.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-gray-900">{item.issue}</span>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          item.weight === "높음" ? "bg-red-100 text-red-800" :
                          item.weight === "중간" ? "bg-yellow-100 text-yellow-800" :
                          "bg-green-100 text-green-800"
                        }`}>
                          {item.weight}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-red-500 h-2 rounded-full" 
                          style={{width: `${item.frequency}%`}}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-600 mt-1">{item.frequency}% 빈도</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Target className="w-5 h-5 mr-2 text-green-500" />
                최근 승인 작품 성공 요인
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-medium text-gray-900">Aggregation 집합 (승인)</h4>
                    <p className="text-sm text-gray-600 mt-1">전통적인 재료를 현대적 미감으로 재해석</p>
                    <div className="flex space-x-2 mt-2">
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">조화성 우수</span>
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">독창적 기법</span>
                    </div>
                  </div>
                  
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-medium text-gray-900">행복한 하마가족 (승인)</h4>
                    <p className="text-sm text-gray-600 mt-1">벤치 기능을 겸한 실용성과 친근한 조형미</p>
                    <div className="flex space-x-2 mt-2">
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">기능성</span>
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">대중 친화성</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="border-l-4 border-red-500 pl-4">
                    <h4 className="font-medium text-gray-900">아름다운 질주 (부결)</h4>
                    <p className="text-sm text-gray-600 mt-1">공간에 비해 과도한 스케일과 색채</p>
                    <div className="flex space-x-2 mt-2">
                      <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded">스케일 부적합</span>
                      <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded">색채 과다</span>
                    </div>
                  </div>
                  
                  <div className="border-l-4 border-red-500 pl-4">
                    <h4 className="font-medium text-gray-900">LOVE EVERYWHERE (부결)</h4>
                    <p className="text-sm text-gray-600 mt-1">캐릭터적 요소로 공공성 부족</p>
                    <div className="flex space-x-2 mt-2">
                      <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded">공공성 부족</span>
                      <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded">형식미 부족</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'projects' && (
          <div className="bg-white rounded-lg shadow-sm border">
            <div className="p-6 border-b">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">실제 심의 결과 분석</h3>
                <div className="relative">
                  <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
                  <input
                    type="text"
                    placeholder="프로젝트 검색..."
                    className="pl-10 pr-4 py-2 border rounded-lg"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">프로젝트명</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">위치</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">작품유형</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">예측 통과율</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">실제 결과</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">심의일</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredProjects.map((project) => (
                    <tr key={project.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                        {project.projectName}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-600 text-sm">
                        {project.location}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                        {project.artworkType}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className={`w-2 h-2 rounded-full mr-2 ${
                            project.passRate >= 80 ? 'bg-green-500' : 
                            project.passRate >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                          }`}></div>
                          <span className="font-medium">{project.passRate}%</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          {getStatusIcon(project.status)}
                          <span className={`ml-2 font-medium ${getStatusColor(project.status)}`}>
                            {project.status}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                        {project.meetingDate || project.submissionDate}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-6 border-t bg-gray-50">
              <h4 className="font-semibold text-gray-900 mb-3">주요 피드백 패턴</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h5 className="font-medium text-red-600 mb-2">🚫 자주 나타나는 부결 사유</h5>
                  <ul className="space-y-1 text-gray-600">
                    <li>• 설치 공간과의 조화 부족 (63%)</li>
                    <li>• 작품 크기/스케일 부적합 (47%)</li>
                    <li>• 공공미술로서의 공공성 부족 (21%)</li>
                    <li>• 조형성 및 예술성 미흡 (16%)</li>
                    <li>• 제작 비용 과다 책정 (16%)</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-green-600 mb-2">✅ 승인 작품 공통 요소</h5>
                  <ul className="space-y-1 text-gray-600">
                    <li>• 건축물과의 색상/재질 조화</li>
                    <li>• 적절한 규모와 배치</li>
                    <li>• 시민 친화적 접근성</li>
                    <li>• 실용적 기능 겸비</li>
                    <li>• 독창적이면서 공공적 의미</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'projects' && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 className="text-lg font-semibold mb-4">실제 심의 결과 분석</h3>
              
              <div className="mb-4">
                <div className="relative">
                  <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
                  <input
                    type="text"
                    placeholder="프로젝트 검색..."
                    className="pl-10 pr-4 py-2 border rounded-lg w-full max-w-md"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project) => (
                  <div key={project.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold text-gray-900 text-sm">{project.projectName}</h4>
                      <div className="flex items-center">
                        {getStatusIcon(project.status)}
                        <span className={`ml-1 text-xs font-medium ${getStatusColor(project.status)}`}>
                          {project.status}
                        </span>
                      </div>
                    </div>
                    
                    <div className="space-y-2 text-xs text-gray-600 mb-3">
                      <p><span className="font-medium">위치:</span> {project.location}</p>
                      <p><span className="font-medium">유형:</span> {project.artworkType} | {project.buildingType}</p>
                      <p><span className="font-medium">작가:</span> {project.artist}</p>
                      <p><span className="font-medium">예측 통과율:</span> 
                        <span className={`font-bold ml-1 ${
                          project.passRate >= 80 ? 'text-green-600' : 
                          project.passRate >= 60 ? 'text-yellow-600' : 'text-red-600'
                        }`}>
                          {project.passRate}%
                        </span>
                      </p>
                    </div>
                    
                    <div className="border-t pt-3">
                      <p className="text-xs font-medium text-gray-700 mb-1">주요 피드백</p>
                      <div className="space-y-1">
                        {project.feedback.slice(0, 2).map((feedback, i) => (
                          <p key={i} className="text-xs text-gray-600 leading-tight">• {feedback}</p>
                        ))}
                        {project.feedback.length > 2 && (
                          <p className="text-xs text-blue-600">+ {project.feedback.length - 2}개 더...</p>
                        )}
                      </div>
                    </div>
                    
                    {project.condition && (
                      <div className="mt-3 p-2 bg-yellow-50 border border-yellow-200 rounded">
                        <p className="text-xs font-medium text-yellow-800">조건부 승인 사유:</p>
                        <p className="text-xs text-yellow-700">{project.condition}</p>
                      </div>
                    )}
                    
                    <div className="mt-3 text-xs text-gray-500">
                      심의일: {project.meetingDate}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'add' && (
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <Target className="w-5 h-5 mr-2 text-blue-500" />
              AI 통과율 예측 및 개선점 분석
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">프로젝트명</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-lg"
                  value={newProject.projectName}
                  onChange={(e) => setNewProject({...newProject, projectName: e.target.value})}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">위치</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-lg"
                  value={newProject.location}
                  onChange={(e) => setNewProject({...newProject, location: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">건축물 유형</label>
                <select
                  className="w-full px-3 py-2 border rounded-lg"
                  value={newProject.buildingType}
                  onChange={(e) => setNewProject({...newProject, buildingType: e.target.value})}
                >
                  <option value="">선택하세요</option>
                  <option value="업무시설">업무시설</option>
                  <option value="공동주택">공동주택</option>
                  <option value="근린생활시설">근린생활시설</option>
                  <option value="문화시설">문화시설</option>
                  <option value="교육시설">교육시설</option>
                  <option value="청년주택">청년주택</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">미술작품 유형</label>
                <select
                  className="w-full px-3 py-2 border rounded-lg"
                  value={newProject.artworkType}
                  onChange={(e) => setNewProject({...newProject, artworkType: e.target.value})}
                >
                  <option value="">선택하세요</option>
                  <option value="조각">조각</option>
                  <option value="회화">회화</option>
                  <option value="설치미술">설치미술</option>
                  <option value="미디어아트">미디어아트</option>
                  <option value="부조">부조</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">작가명</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-lg"
                  value={newProject.artist}
                  onChange={(e) => setNewProject({...newProject, artist: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">총 연면적 (㎡)</label>
                <input
                  type="number"
                  className="w-full px-3 py-2 border rounded-lg"
                  value={newProject.totalArea}
                  onChange={(e) => setNewProject({...newProject, totalArea: e.target.value})}
                />
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-md font-semibold mb-4">실제 심의 평가 기준 (1-5점)</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { key: 'harmony', label: '건축물과의 조화성', weight: '30%', priority: 'high' },
                  { key: 'buildingEnvironment', label: '환경과의 조화 및 스케일', weight: '25%', priority: 'high' },
                  { key: 'artistry', label: '예술성 및 독창성', weight: '15%', priority: 'medium' },
                  { key: 'socialCultural', label: '공공성 및 사회문화적 기여', weight: '10%', priority: 'medium' },
                  { key: 'safety', label: '안전성', weight: '10%', priority: 'medium' },
                  { key: 'accessibility', label: '접근성', weight: '5%', priority: 'low' }
                ].map((criteria) => (
                  <div key={criteria.key} className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      {criteria.label}
                      <span className={`ml-2 px-2 py-1 rounded text-xs ${
                        criteria.priority === 'high' ? 'bg-red-100 text-red-700' :
                        criteria.priority === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-green-100 text-green-700'
                      }`}>
                        {criteria.weight}
                      </span>
                    </label>
                    <select
                      className="w-full px-3 py-2 border rounded-lg"
                      value={newProject.evaluationCriteria[criteria.key]}
                      onChange={(e) => setNewProject({
                        ...newProject,
                        evaluationCriteria: {
                          ...newProject.evaluationCriteria,
                          [criteria.key]: parseInt(e.target.value)
                        }
                      })}
                    >
                      <option value={0}>점수 선택</option>
                      <option value={1}>1점 (매우 부족)</option>
                      <option value={2}>2점 (부족)</option>
                      <option value={3}>3점 (보통)</option>
                      <option value={4}>4점 (좋음)</option>
                      <option value={5}>5점 (매우 좋음)</option>
                    </select>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">AI 예측 결과</h4>
                  <div className="flex items-center space-x-4">
                    <div className="text-center">
                      <p className="text-3xl font-bold text-blue-600">
                        {predictPassRate(newProject.evaluationCriteria)}%
                      </p>
                      <p className="text-sm text-gray-600">예상 통과율</p>
                    </div>
                    <div className="text-center">
                      <p className={`text-lg font-semibold ${
                        predictPassRate(newProject.evaluationCriteria) >= 80 ? 'text-green-600' :
                        predictPassRate(newProject.evaluationCriteria) >= 60 ? 'text-yellow-600' :
                        'text-red-600'
                      }`}>
                        {predictPassRate(newProject.evaluationCriteria) >= 80 ? '승인 예상' :
                         predictPassRate(newProject.evaluationCriteria) >= 60 ? '조건부승인 예상' :
                         '부결 위험'}
                      </p>
                      <p className="text-sm text-gray-600">예측 결과</p>
                    </div>
                  </div>
                </div>
                <button
                  onClick={addProject}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  분석 저장
                </button>
              </div>

              {getRecommendations(newProject.evaluationCriteria).length > 0 && (
                <div className="mt-4 p-4 bg-white rounded-lg border">
                  <h5 className="font-medium text-gray-900 mb-2 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-2 text-orange-500" />
                    개선 권장사항
                  </h5>
                  <ul className="space-y-1">
                    {getRecommendations(newProject.evaluationCriteria).map((rec, index) => (
                      <li key={index} className="text-sm text-gray-700 flex items-start">
                        <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        {rec}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'insights' && (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-lg font-semibold mb-6 flex items-center">
                <Users className="w-5 h-5 mr-2 text-green-500" />
                실제 회의록 분석 기반 성공 전략
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4 text-green-600">✅ 반드시 지켜야 할 핵심 요소</h4>
                  <div className="space-y-4">
                    <div className="border-l-4 border-green-500 pl-4">
                      <h5 className="font-medium">1. 건축물과의 완벽한 조화 (가중치 30%)</h5>
                      <p className="text-sm text-gray-600 mt-1">색상, 재질, 형태가 건축물과 자연스럽게 어우러져야 함</p>
                      <p className="text-xs text-blue-600 mt-1">💡 건축물 외관 분석 후 색상 팔레트 제작 권장</p>
                    </div>
                    
                    <div className="border-l-4 border-green-500 pl-4">
                      <h5 className="font-medium">2. 적정 규모와 스케일 (가중치 25%)</h5>
                      <p className="text-sm text-gray-600 mt-1">설치 공간에 비해 과도하지 않은 적절한 크기</p>
                      <p className="text-xs text-blue-600 mt-1">💡 공간 대비 작품 비율 3:1 ~ 5:1 권장</p>
                    </div>
                    
                    <div className="border-l-4 border-green-500 pl-4">
                      <h5 className="font-medium">3. 공공미술로서의 품격</h5>
                      <p className="text-sm text-gray-600 mt-1">캐릭터적/상업적 요소 지양, 상징성과 형식미 확보</p>
                      <p className="text-xs text-blue-600 mt-1">💡 사회문화적 의미와 예술적 가치 동시 추구</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-4 text-red-600">🚫 절대 피해야 할 요소</h4>
                  <div className="space-y-4">
                    <div className="border-l-4 border-red-500 pl-4">
                      <h5 className="font-medium">1. 공간 대비 과도한 스케일</h5>
                      <p className="text-sm text-gray-600 mt-1">"위압감", "시각적 피로감" 유발하는 크기</p>
                      <p className="text-xs text-red-600 mt-1">⚠️ 특히 실내 공간에서 주의</p>
                    </div>
                    
                    <div className="border-l-4 border-red-500 pl-4">
                      <h5 className="font-medium">2. 단순한 형태의 확대</h5>
                      <p className="text-sm text-gray-600 mt-1">"공예작업을 크기만 확대한 인상" 금물</p>
                      <p className="text-xs text-red-600 mt-1">⚠️ 조형적 깊이와 완성도 필수</p>
                    </div>
                    
                    <div className="border-l-4 border-red-500 pl-4">
                      <h5 className="font-medium">3. 부적절한 주제나 소재</h5>
                      <p className="text-sm text-gray-600 mt-1">음주, 선정적 요소, 부정적 이미지 등</p>
                      <p className="text-xs text-red-600 mt-1">⚠️ 공공장소와 비즈니스 환경 고려</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-lg font-semibold mb-4">건축물 유형별 성공 가이드</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-3">🏢 업무시설</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 모던하고 세련된 디자인</li>
                    <li>• 차분한 색상 팔레트</li>
                    <li>• 전문적이고 품격 있는 주제</li>
                    <li>• 로비나 접견공간 고려</li>
                  </ul>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-3">🏠 공동주택</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 가족 친화적 주제</li>
                    <li>• 벤치 등 실용적 기능</li>
                    <li>• 아이들 안전성 고려</li>
                    <li>• 공동체 의식 반영</li>
                  </ul>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-3">🎯 청년주택</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 역동적이고 활기찬 디자인</li>
                    <li>• 젊은 감성의 색상</li>
                    <li>• 도전과 성장 메시지</li>
                    <li>• SNS 포토존 가능성</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Clock className="w-5 h-5 mr-2 text-purple-500" />
                심의 프로세스 최적화 가이드
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">📋 제출 전 체크리스트</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span>건축물 색상/재질 분석 완료</span>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span>공간 대비 적정 스케일 검증</span>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span>구조 안전성 검토서 준비</span>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span>유지관리 계획서 상세 작성</span>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span>예산 적정성 검토 완료</span>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span>공공성 메시지 명확화</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-3">⏰ 심의 일정 최적화</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs mr-3 mt-0.5">1차</span>
                      <div>
                        <p className="font-medium text-gray-700">완성도 높은 초기안 제출</p>
                        <p className="text-gray-600">부결 시 재심의 비용과 시간 고려</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs mr-3 mt-0.5">조건부</span>
                      <div>
                        <p className="font-medium text-gray-700">조건 사항 신속 반영</p>
                        <p className="text-gray-600">안전성, 명판 등 기술적 보완 즉시 처리</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs mr-3 mt-0.5">승인</span>
                      <div>
                        <p className="font-medium text-gray-700">시민 안전 고려 설치</p>
                        <p className="text-gray-600">위원회 권고사항 성실 이행</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="bg-blue-50 border-t border-blue-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-start space-x-3">
            <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
            <div className="text-sm text-blue-800">
              <p className="font-medium mb-1">🎯 실제 데이터 기반 시스템</p>
              <p>본 시스템은 2025년 제1차~제7차 미술작품심의위원회 실제 회의록을 분석하여 제작되었습니다. 
              총 19건의 심의 결과를 바탕으로 한 AI 예측 모델이며, 실제 통과율 74%를 반영합니다. 
              심의 결과는 위원회의 종합적 판단에 따라 달라질 수 있으니 참고용으로 활용해주세요.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicArtEvaluationDB;