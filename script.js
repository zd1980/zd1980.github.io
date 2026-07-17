    // ==================== 故障代码数据库 ====================
    const faultDatabase = [
        // ===== 格力空调 =====
        {category:"空调",subCategory:"变频挂机",brand:"格力",code:"E6",reason:"内、外机通讯故障",suggestion1:"检查内外机连接线是否断开",suggestion2:"测量是否有220V交流电到外机",suggestion3:"测量外机S+N端电压",suggestion4:"",hotLevel:950},
        {category:"空调",subCategory:"变频挂机",brand:"格力",code:"F0",reason:"系统缺氟或堵塞",suggestion1:"检查系统是否缺氟",suggestion2:"检查管路是否堵塞",suggestion3:"检查阀门是否完全打开",suggestion4:"",hotLevel:900},
        {category:"空调",subCategory:"变频挂机",brand:"格力",code:"E1",reason:"压缩机高压保护",suggestion1:"检查冷凝器散热是否正常",suggestion2:"检查室外风机是否正常运转",suggestion3:"检查系统压力是否过高",suggestion4:"清洗室外机散热器",hotLevel:850},
        {category:"空调",subCategory:"变频挂机",brand:"格力",code:"E2",reason:"室内防冻结保护",suggestion1:"检查室内机滤网是否堵塞",suggestion2:"检查蒸发器是否脏堵",suggestion3:"检查室内风机转速是否正常",suggestion4:"检查系统是否缺氟",hotLevel:800},
        {category:"空调",subCategory:"变频挂机",brand:"格力",code:"E3",reason:"压缩机低压保护",suggestion1:"检查系统是否缺氟",suggestion2:"检查膨胀阀是否堵塞",suggestion3:"检查过滤器是否堵塞",suggestion4:"",hotLevel:780},
        {category:"空调",subCategory:"变频挂机",brand:"格力",code:"E4",reason:"压缩机排气温度过高",suggestion1:"检查系统是否缺氟",suggestion2:"检查膨胀阀是否正常",suggestion3:"检查压缩机是否老化",suggestion4:"",hotLevel:760},
        {category:"空调",subCategory:"变频挂机",brand:"格力",code:"E5",reason:"过电流保护",suggestion1:"检查电压是否正常",suggestion2:"检查压缩机是否卡缸",suggestion3:"检查外机散热是否正常",suggestion4:"",hotLevel:740},
        {category:"空调",subCategory:"变频挂机",brand:"格力",code:"H1",reason:"化霜",suggestion1:"正常化霜，等待即可",suggestion2:"如长时间显示，检查化霜传感器",suggestion3:"检查四通阀是否正常",suggestion4:"",hotLevel:700},
        {category:"空调",subCategory:"变频挂机",brand:"格力",code:"H3",reason:"压缩机过载保护",suggestion1:"检查电源电压是否稳定",suggestion2:"检查压缩机运行电流",suggestion3:"检查外机散热情况",suggestion4:"",hotLevel:680},
        {category:"空调",subCategory:"变频挂机",brand:"格力",code:"H5",reason:"模块保护（IPM）",suggestion1:"检查压缩机是否正常",suggestion2:"检查外机散热情况",suggestion3:"检查模块板是否损坏",suggestion4:"",hotLevel:660},
        {category:"空调",subCategory:"定频挂机",brand:"格力",code:"E6",reason:"内、外机通讯故障",suggestion1:"检查内外机连接线是否断开",suggestion2:"测量是否有220V交流电到外机",suggestion3:"测量外机S+N端电压",suggestion4:"",hotLevel:920},
        {category:"空调",subCategory:"定频挂机",brand:"格力",code:"E1",reason:"压缩机高压保护",suggestion1:"检查冷凝器散热是否正常",suggestion2:"检查室外风机是否正常运转",suggestion3:"检查系统压力是否过高",suggestion4:"",hotLevel:870},
        {category:"空调",subCategory:"定频挂机",brand:"格力",code:"E2",reason:"室内防冻结保护",suggestion1:"检查室内机滤网是否堵塞",suggestion2:"检查蒸发器是否脏堵",suggestion3:"检查室内风机转速是否正常",suggestion4:"",hotLevel:810},
        {category:"空调",subCategory:"定频挂机",brand:"格力",code:"E3",reason:"压缩机低压保护",suggestion1:"检查系统是否缺氟",suggestion2:"检查膨胀阀是否堵塞",suggestion3:"",suggestion4:"",hotLevel:750},
        {category:"空调",subCategory:"定频挂机",brand:"格力",code:"E5",reason:"过电流保护",suggestion1:"检查电压是否正常",suggestion2:"检查压缩机是否卡缸",suggestion3:"",suggestion4:"",hotLevel:730},
        {category:"空调",subCategory:"变频柜机",brand:"格力",code:"E6",reason:"内、外机通讯故障",suggestion1:"检查内外机连接线是否断开",suggestion2:"测量是否有220V交流电到外机",suggestion3:"检查通讯板是否正常",suggestion4:"",hotLevel:910},
        {category:"空调",subCategory:"变频柜机",brand:"格力",code:"E1",reason:"压缩机高压保护",suggestion1:"检查冷凝器散热是否正常",suggestion2:"检查室外风机是否正常运转",suggestion3:"",suggestion4:"",hotLevel:840},
        {category:"空调",subCategory:"变频柜机",brand:"格力",code:"E4",reason:"压缩机排气温度过高",suggestion1:"检查系统是否缺氟",suggestion2:"检查膨胀阀是否正常",suggestion3:"",suggestion4:"",hotLevel:720},
        {category:"空调",subCategory:"变频柜机",brand:"格力",code:"H5",reason:"模块保护",suggestion1:"检查模块板散热情况",suggestion2:"检查压缩机是否正常",suggestion3:"检查供电电压",suggestion4:"",hotLevel:690},
        {category:"空调",subCategory:"定频柜机",brand:"格力",code:"E6",reason:"内、外机通讯故障",suggestion1:"检查内外机连接线",suggestion2:"测量外机供电电压",suggestion3:"",suggestion4:"",hotLevel:880},
        {category:"空调",subCategory:"定频柜机",brand:"格力",code:"E1",reason:"压缩机高压保护",suggestion1:"检查冷凝器散热",suggestion2:"检查系统压力",suggestion3:"",suggestion4:"",hotLevel:820},
        {category:"空调",subCategory:"定频柜机",brand:"格力",code:"E3",reason:"压缩机低压保护",suggestion1:"检查系统是否缺氟",suggestion2:"检查管路是否堵塞",suggestion3:"",suggestion4:"",hotLevel:710},
        {category:"空调",subCategory:"天花机",brand:"格力",code:"E6",reason:"内、外机通讯故障",suggestion1:"检查内外机连接线",suggestion2:"检查通讯板",suggestion3:"测量外机供电",suggestion4:"",hotLevel:860},
        {category:"空调",subCategory:"天花机",brand:"格力",code:"E1",reason:"压缩机高压保护",suggestion1:"检查冷凝器散热",suggestion2:"检查室外风机",suggestion3:"检查系统压力",suggestion4:"",hotLevel:790},
        {category:"空调",subCategory:"天花机",brand:"格力",code:"E4",reason:"压缩机排气温度过高",suggestion1:"检查系统氟利昂",suggestion2:"检查膨胀阀",suggestion3:"",suggestion4:"",hotLevel:670},
        {category:"空调",subCategory:"风管机",brand:"格力",code:"E6",reason:"内、外机通讯故障",suggestion1:"检查内外机连接线",suggestion2:"检查通讯板是否损坏",suggestion3:"测量外机电压",suggestion4:"",hotLevel:850},
        {category:"空调",subCategory:"风管机",brand:"格力",code:"E1",reason:"压缩机高压保护",suggestion1:"检查冷凝器散热",suggestion2:"检查风机运转",suggestion3:"",suggestion4:"",hotLevel:770},
        {category:"空调",subCategory:"风管机",brand:"格力",code:"E2",reason:"室内防冻结保护",suggestion1:"检查滤网是否堵塞",suggestion2:"检查风量是否正常",suggestion3:"检查回风温度传感器",suggestion4:"",hotLevel:650},
        // ===== 美的空调 =====
        {category:"空调",subCategory:"变频挂机",brand:"美的",code:"E1",reason:"内、外机通讯故障",suggestion1:"检查内外机连接线",suggestion2:"检查室外机供电",suggestion3:"检查通讯线接头",suggestion4:"",hotLevel:940},
        {category:"空调",subCategory:"变频挂机",brand:"美的",code:"E5",reason:"内、外机通讯故障",suggestion1:"检查通讯线是否接好",suggestion2:"检查内机主板",suggestion3:"检查外机主板",suggestion4:"",hotLevel:890},
        {category:"空调",subCategory:"变频挂机",brand:"美的",code:"E2",reason:"T2传感器故障",suggestion1:"检查T2传感器连接",suggestion2:"测量T2传感器阻值",suggestion3:"更换T2传感器",suggestion4:"",hotLevel:870},
        {category:"空调",subCategory:"变频挂机",brand:"美的",code:"E3",reason:"T3传感器故障",suggestion1:"检查T3传感器连接",suggestion2:"测量T3传感器阻值",suggestion3:"更换T3传感器",suggestion4:"",hotLevel:820},
        {category:"空调",subCategory:"变频挂机",brand:"美的",code:"E4",reason:"T4传感器故障（室外环温）",suggestion1:"检查T4传感器连接",suggestion2:"测量传感器阻值",suggestion3:"更换传感器",suggestion4:"",hotLevel:790},
        {category:"空调",subCategory:"变频挂机",brand:"美的",code:"P0",reason:"模块保护（IPM）",suggestion1:"检查模块板",suggestion2:"检查压缩机",suggestion3:"检查供电电压",suggestion4:"",hotLevel:760},
        {category:"空调",subCategory:"变频挂机",brand:"美的",code:"P1",reason:"电压过高或过低保护",suggestion1:"检查电源电压",suggestion2:"等待电压恢复正常后重启",suggestion3:"",suggestion4:"",hotLevel:740},
        {category:"空调",subCategory:"变频挂机",brand:"美的",code:"P2",reason:"压缩机顶部温度保护",suggestion1:"检查系统是否缺氟",suggestion2:"检查压缩机运行情况",suggestion3:"检查散热",suggestion4:"",hotLevel:710},
        {category:"空调",subCategory:"变频挂机",brand:"美的",code:"P4",reason:"压缩机位置保护",suggestion1:"检查压缩机驱动板",suggestion2:"检查压缩机接线",suggestion3:"",suggestion4:"",hotLevel:680},
        {category:"空调",subCategory:"定频挂机",brand:"美的",code:"E1",reason:"T1传感器故障",suggestion1:"检查T1传感器接线",suggestion2:"测量传感器阻值",suggestion3:"更换传感器",suggestion4:"",hotLevel:860},
        {category:"空调",subCategory:"定频挂机",brand:"美的",code:"E2",reason:"T2传感器故障",suggestion1:"检查T2传感器接线",suggestion2:"测量传感器阻值",suggestion3:"更换传感器",suggestion4:"",hotLevel:830},
        {category:"空调",subCategory:"定频挂机",brand:"美的",code:"E3",reason:"T3传感器故障",suggestion1:"检查T3传感器",suggestion2:"测量阻值是否正常",suggestion3:"",suggestion4:"",hotLevel:780},
        {category:"空调",subCategory:"定频挂机",brand:"美的",code:"E5",reason:"过电流保护",suggestion1:"检查供电电压",suggestion2:"检查压缩机",suggestion3:"",suggestion4:"",hotLevel:750},
        {category:"空调",subCategory:"变频柜机",brand:"美的",code:"E1",reason:"内、外机通讯故障",suggestion1:"检查通讯线",suggestion2:"检查主板",suggestion3:"",suggestion4:"",hotLevel:900},
        {category:"空调",subCategory:"变频柜机",brand:"美的",code:"E2",reason:"T2传感器故障",suggestion1:"检查传感器连接",suggestion2:"测量阻值",suggestion3:"更换传感器",suggestion4:"",hotLevel:840},
        {category:"空调",subCategory:"变频柜机",brand:"美的",code:"P0",reason:"模块保护",suggestion1:"检查模块散热",suggestion2:"检查压缩机",suggestion3:"检查供电",suggestion4:"",hotLevel:720},
        {category:"空调",subCategory:"定频柜机",brand:"美的",code:"E1",reason:"T1传感器故障",suggestion1:"检查传感器",suggestion2:"测量阻值",suggestion3:"",suggestion4:"",hotLevel:810},
        {category:"空调",subCategory:"定频柜机",brand:"美的",code:"E5",reason:"过电流保护",suggestion1:"检查电压",suggestion2:"检查压缩机运行电流",suggestion3:"",suggestion4:"",hotLevel:730},
        {category:"空调",subCategory:"天花机",brand:"美的",code:"E1",reason:"内、外机通讯故障",suggestion1:"检查通讯线",suggestion2:"检查主板",suggestion3:"检查供电",suggestion4:"",hotLevel:850},
        {category:"空调",subCategory:"天花机",brand:"美的",code:"E2",reason:"T2传感器故障",suggestion1:"检查传感器",suggestion2:"更换传感器",suggestion3:"",suggestion4:"",hotLevel:740},
        {category:"空调",subCategory:"风管机",brand:"美的",code:"E1",reason:"内、外机通讯故障",suggestion1:"检查通讯线连接",suggestion2:"检查主板",suggestion3:"",suggestion4:"",hotLevel:830},
        {category:"空调",subCategory:"风管机",brand:"美的",code:"E5",reason:"过电流保护",suggestion1:"检查电压",suggestion2:"检查压缩机",suggestion3:"检查外机散热",suggestion4:"",hotLevel:710},
        // ===== 奥克斯空调 =====
        {category:"空调",subCategory:"变频挂机",brand:"奥克斯",code:"E1",reason:"室内温度传感器故障",suggestion1:"检查室内温度传感器连接",suggestion2:"测量传感器阻值",suggestion3:"更换传感器",suggestion4:"",hotLevel:880},
        {category:"空调",subCategory:"变频挂机",brand:"奥克斯",code:"E4",reason:"内、外机通讯故障",suggestion1:"检查内外机连接线",suggestion2:"检查通讯板",suggestion3:"检查外机供电",suggestion4:"",hotLevel:860},
        {category:"空调",subCategory:"变频挂机",brand:"奥克斯",code:"E2",reason:"室内盘管传感器故障",suggestion1:"检查盘管传感器连接",suggestion2:"测量传感器阻值",suggestion3:"更换传感器",suggestion4:"",hotLevel:820},
        {category:"空调",subCategory:"变频挂机",brand:"奥克斯",code:"E3",reason:"室外盘管传感器故障",suggestion1:"检查室外盘管传感器",suggestion2:"测量阻值",suggestion3:"更换传感器",suggestion4:"",hotLevel:790},
        {category:"空调",subCategory:"变频挂机",brand:"奥克斯",code:"E5",reason:"室外机排气温度过高",suggestion1:"检查系统氟利昂",suggestion2:"检查压缩机",suggestion3:"检查散热",suggestion4:"",hotLevel:760},
        {category:"空调",subCategory:"变频挂机",brand:"奥克斯",code:"F1",reason:"模块保护",suggestion1:"检查模块板",suggestion2:"检查压缩机",suggestion3:"",suggestion4:"",hotLevel:730},
        {category:"空调",subCategory:"变频挂机",brand:"奥克斯",code:"F2",reason:"过电流保护",suggestion1:"检查电压",suggestion2:"检查压缩机电流",suggestion3:"",suggestion4:"",hotLevel:700},
        {category:"空调",subCategory:"变频挂机",brand:"奥克斯",code:"F3",reason:"电压异常保护",suggestion1:"检查供电电压是否正常",suggestion2:"等待电压恢复",suggestion3:"",suggestion4:"",hotLevel:680},
        {category:"空调",subCategory:"定频挂机",brand:"奥克斯",code:"E1",reason:"室内温度传感器故障",suggestion1:"检查传感器连接",suggestion2:"更换传感器",suggestion3:"",suggestion4:"",hotLevel:850},
        {category:"空调",subCategory:"定频挂机",brand:"奥克斯",code:"E4",reason:"内、外机通讯故障",suggestion1:"检查连接线",suggestion2:"检查主板",suggestion3:"",suggestion4:"",hotLevel:830},
        {category:"空调",subCategory:"定频挂机",brand:"奥克斯",code:"E2",reason:"室内盘管传感器故障",suggestion1:"检查传感器",suggestion2:"测量阻值",suggestion3:"",suggestion4:"",hotLevel:780},
        {category:"空调",subCategory:"变频柜机",brand:"奥克斯",code:"E1",reason:"室内温度传感器故障",suggestion1:"检查传感器连接",suggestion2:"更换传感器",suggestion3:"",suggestion4:"",hotLevel:840},
        {category:"空调",subCategory:"变频柜机",brand:"奥克斯",code:"E4",reason:"内、外机通讯故障",suggestion1:"检查通讯线",suggestion2:"检查主板",suggestion3:"检查供电",suggestion4:"",hotLevel:810},
        {category:"空调",subCategory:"定频柜机",brand:"奥克斯",code:"E1",reason:"室内温度传感器故障",suggestion1:"检查传感器",suggestion2:"更换传感器",suggestion3:"",suggestion4:"",hotLevel:800},
        {category:"空调",subCategory:"定频柜机",brand:"奥克斯",code:"E4",reason:"内、外机通讯故障",suggestion1:"检查连接线",suggestion2:"检查供电",suggestion3:"",suggestion4:"",hotLevel:770},
        {category:"空调",subCategory:"天花机",brand:"奥克斯",code:"E1",reason:"室内温度传感器故障",suggestion1:"检查传感器连接",suggestion2:"更换传感器",suggestion3:"",suggestion4:"",hotLevel:780},
        {category:"空调",subCategory:"天花机",brand:"奥克斯",code:"E4",reason:"内、外机通讯故障",suggestion1:"检查通讯线",suggestion2:"检查供电",suggestion3:"",suggestion4:"",hotLevel:750},
        {category:"空调",subCategory:"风管机",brand:"奥克斯",code:"E1",reason:"室内温度传感器故障",suggestion1:"检查传感器",suggestion2:"更换传感器",suggestion3:"",suggestion4:"",hotLevel:760},
        {category:"空调",subCategory:"风管机",brand:"奥克斯",code:"E4",reason:"内、外机通讯故障",suggestion1:"检查通讯线",suggestion2:"检查主板",suggestion3:"",suggestion4:"",hotLevel:730},
        // ===== 海尔空调 =====
        {category:"空调",subCategory:"变频挂机",brand:"海尔",code:"E1",reason:"室内温度传感器故障",suggestion1:"检查传感器连接",suggestion2:"测量传感器阻值",suggestion3:"更换传感器",suggestion4:"",hotLevel:870},
        {category:"空调",subCategory:"变频挂机",brand:"海尔",code:"E2",reason:"室内盘管传感器故障",suggestion1:"检查盘管传感器",suggestion2:"测量阻值",suggestion3:"更换传感器",suggestion4:"",hotLevel:830},
        {category:"空调",subCategory:"变频挂机",brand:"海尔",code:"E6",reason:"室外机通讯故障",suggestion1:"检查内外机连接线",suggestion2:"检查室外机主板",suggestion3:"检查通讯电路",suggestion4:"",hotLevel:900},
        {category:"空调",subCategory:"变频挂机",brand:"海尔",code:"E7",reason:"室外机排气温度过高",suggestion1:"检查氟利昂",suggestion2:"检查压缩机",suggestion3:"检查散热器",suggestion4:"",hotLevel:780},
        {category:"空调",subCategory:"变频挂机",brand:"海尔",code:"F3",reason:"排水系统故障",suggestion1:"检查排水管是否堵塞",suggestion2:"检查排水泵",suggestion3:"清理排水通道",suggestion4:"",hotLevel:750},
        {category:"空调",subCategory:"变频挂机",brand:"海尔",code:"F7",reason:"模块保护",suggestion1:"检查模块板",suggestion2:"检查压缩机",suggestion3:"检查散热",suggestion4:"",hotLevel:720},
        {category:"空调",subCategory:"定频挂机",brand:"海尔",code:"E1",reason:"室内温度传感器故障",suggestion1:"检查传感器",suggestion2:"更换传感器",suggestion3:"",suggestion4:"",hotLevel:850},
        {category:"空调",subCategory:"定频挂机",brand:"海尔",code:"E6",reason:"室外机通讯故障",suggestion1:"检查连接线",suggestion2:"检查主板",suggestion3:"",suggestion4:"",hotLevel:880},
        {category:"空调",subCategory:"定频挂机",brand:"海尔",code:"E2",reason:"室内盘管传感器故障",suggestion1:"检查传感器",suggestion2:"测量阻值",suggestion3:"",suggestion4:"",hotLevel:810},
        {category:"空调",subCategory:"变频柜机",brand:"海尔",code:"E1",reason:"室内温度传感器故障",suggestion1:"检查传感器",suggestion2:"更换传感器",suggestion3:"",suggestion4:"",hotLevel:840},
        {category:"空调",subCategory:"变频柜机",brand:"海尔",code:"E6",reason:"室外机通讯故障",suggestion1:"检查通讯线",suggestion2:"检查主板",suggestion3:"",suggestion4:"",hotLevel:870},
        {category:"空调",subCategory:"定频柜机",brand:"海尔",code:"E1",reason:"室内温度传感器故障",suggestion1:"检查传感器连接",suggestion2:"更换传感器",suggestion3:"",suggestion4:"",hotLevel:800},
        {category:"空调",subCategory:"定频柜机",brand:"海尔",code:"E6",reason:"室外机通讯故障",suggestion1:"检查连接线",suggestion2:"检查供电",suggestion3:"",suggestion4:"",hotLevel:840},
        {category:"空调",subCategory:"天花机",brand:"海尔",code:"E1",reason:"室内温度传感器故障",suggestion1:"检查传感器",suggestion2:"更换传感器",suggestion3:"",suggestion4:"",hotLevel:770},
        {category:"空调",subCategory:"天花机",brand:"海尔",code:"E6",reason:"室外机通讯故障",suggestion1:"检查通讯线",suggestion2:"检查主板",suggestion3:"",suggestion4:"",hotLevel:810},
        {category:"空调",subCategory:"风管机",brand:"海尔",code:"E1",reason:"室内温度传感器故障",suggestion1:"检查传感器",suggestion2:"更换传感器",suggestion3:"",suggestion4:"",hotLevel:750},
        {category:"空调",subCategory:"风管机",brand:"海尔",code:"E6",reason:"室外机通讯故障",suggestion1:"检查通讯线",suggestion2:"检查供电",suggestion3:"",suggestion4:"",hotLevel:790},
        // ===== 格力洗衣机 =====
        {category:"洗衣机",subCategory:"波轮洗衣机",brand:"格力",code:"E1",reason:"排水超时",suggestion1:"检查排水管是否堵塞",suggestion2:"检查排水阀是否正常",suggestion3:"检查排水泵",suggestion4:"",hotLevel:820},
        {category:"洗衣机",subCategory:"波轮洗衣机",brand:"格力",code:"E2",reason:"进水超时",suggestion1:"检查水龙头是否打开",suggestion2:"检查进水阀是否正常",suggestion3:"检查水压是否足够",suggestion4:"",hotLevel:800},
        {category:"洗衣机",subCategory:"波轮洗衣机",brand:"格力",code:"E3",reason:"脱水不平衡",suggestion1:"重新整理衣物",suggestion2:"检查洗衣机是否水平放置",suggestion3:"减少衣物量重新脱水",suggestion4:"",hotLevel:780},
        {category:"洗衣机",subCategory:"波轮洗衣机",brand:"格力",code:"E4",reason:"门盖未关好",suggestion1:"检查门盖是否关严",suggestion2:"检查门锁开关",suggestion3:"",suggestion4:"",hotLevel:750},
        {category:"洗衣机",subCategory:"滚筒洗衣机",brand:"格力",code:"E1",reason:"排水故障",suggestion1:"检查排水管",suggestion2:"清理排水泵滤网",suggestion3:"检查排水泵是否损坏",suggestion4:"",hotLevel:810},
        {category:"洗衣机",subCategory:"滚筒洗衣机",brand:"格力",code:"E2",reason:"进水故障",suggestion1:"检查水龙头",suggestion2:"检查进水阀",suggestion3:"检查进水管是否弯折",suggestion4:"",hotLevel:790},
        {category:"洗衣机",subCategory:"滚筒洗衣机",brand:"格力",code:"E3",reason:"加热故障",suggestion1:"检查加热管",suggestion2:"检查温度传感器",suggestion3:"",suggestion4:"",hotLevel:730},
        {category:"洗衣机",subCategory:"滚筒洗衣机",brand:"格力",code:"E4",reason:"门锁故障",suggestion1:"检查门是否关好",suggestion2:"检查门锁装置",suggestion3:"",suggestion4:"",hotLevel:720},
        // ===== 美的洗衣机 =====
        {category:"洗衣机",subCategory:"波轮洗衣机",brand:"美的",code:"E1",reason:"排水超时",suggestion1:"检查排水管是否堵塞或弯折",suggestion2:"检查排水阀",suggestion3:"清理排水口",suggestion4:"",hotLevel:840},
        {category:"洗衣机",subCategory:"波轮洗衣机",brand:"美的",code:"E2",reason:"进水超时",suggestion1:"检查水龙头是否开启",suggestion2:"检查进水阀过滤网",suggestion3:"检查水压",suggestion4:"",hotLevel:810},
        {category:"洗衣机",subCategory:"波轮洗衣机",brand:"美的",code:"E3",reason:"脱水异常",suggestion1:"重新整理衣物使其均匀分布",suggestion2:"检查洗衣机底脚是否水平",suggestion3:"",suggestion4:"",hotLevel:770},
        {category:"洗衣机",subCategory:"波轮洗衣机",brand:"美的",code:"E4",reason:"进水阀故障",suggestion1:"检查进水阀接线",suggestion2:"测量进水阀线圈",suggestion3:"更换进水阀",suggestion4:"",hotLevel:740},
        {category:"洗衣机",subCategory:"波轮洗衣机",brand:"美的",code:"E5",reason:"水位传感器故障",suggestion1:"检查水位传感器连接",suggestion2:"检查气管是否漏气",suggestion3:"更换水位传感器",suggestion4:"",hotLevel:710},
        {category:"洗衣机",subCategory:"滚筒洗衣机",brand:"美的",code:"E1",reason:"排水故障",suggestion1:"检查排水泵滤网",suggestion2:"检查排水管",suggestion3:"检查排水泵",suggestion4:"",hotLevel:830},
        {category:"洗衣机",subCategory:"滚筒洗衣机",brand:"美的",code:"E2",reason:"门锁故障",suggestion1:"检查门是否完全关闭",suggestion2:"检查门锁开关",suggestion3:"更换门锁",suggestion4:"",hotLevel:800},
        {category:"洗衣机",subCategory:"滚筒洗衣机",brand:"美的",code:"E3",reason:"进水超时",suggestion1:"检查水龙头",suggestion2:"检查进水阀",suggestion3:"检查水压",suggestion4:"",hotLevel:780},
        {category:"洗衣机",subCategory:"滚筒洗衣机",brand:"美的",code:"E4",reason:"加热超时",suggestion1:"检查加热管",suggestion2:"检查温度传感器",suggestion3:"检查控制板",suggestion4:"",hotLevel:730},
        {category:"洗衣机",subCategory:"滚筒洗衣机",brand:"美的",code:"E5",reason:"水温异常",suggestion1:"检查温度传感器",suggestion2:"检查加热管",suggestion3:"",suggestion4:"",hotLevel:700},
        // ===== 海尔洗衣机 =====
        {category:"洗衣机",subCategory:"波轮洗衣机",brand:"海尔",code:"E1",reason:"排水超时",suggestion1:"检查排水管是否堵塞",suggestion2:"检查排水阀",suggestion3:"检查排水泵",suggestion4:"",hotLevel:900},
        {category:"洗衣机",subCategory:"波轮洗衣机",brand:"海尔",code:"E4",reason:"进水超时",suggestion1:"检查水龙头是否打开",suggestion2:"检查进水阀",suggestion3:"检查进水管过滤网",suggestion4:"",hotLevel:870},
        {category:"洗衣机",subCategory:"波轮洗衣机",brand:"海尔",code:"E6",reason:"水位传感器报警",suggestion1:"检查水位传感器",suggestion2:"检查气管是否脱落",suggestion3:"更换水位传感器",suggestion4:"",hotLevel:850},
        {category:"洗衣机",subCategory:"波轮洗衣机",brand:"海尔",code:"E2",reason:"门盖未合上",suggestion1:"检查门盖是否关好",suggestion2:"检查门锁开关",suggestion3:"",suggestion4:"",hotLevel:820},
        {category:"洗衣机",subCategory:"波轮洗衣机",brand:"海尔",code:"E3",reason:"脱水不平衡",suggestion1:"重新整理衣物",suggestion2:"确认洗衣机放置平稳",suggestion3:"减少衣物量",suggestion4:"",hotLevel:790},
        {category:"洗衣机",subCategory:"波轮洗衣机",brand:"海尔",code:"E5",reason:"电机故障",suggestion1:"检查电机接线",suggestion2:"检查电机电容",suggestion3:"检查控制板",suggestion4:"",hotLevel:760},
        {category:"洗衣机",subCategory:"波轮洗衣机",brand:"海尔",code:"E7",reason:"电机过热保护",suggestion1:"等待电机冷却后重试",suggestion2:"检查电机散热",suggestion3:"减少衣物量",suggestion4:"",hotLevel:730},
        {category:"洗衣机",subCategory:"滚筒洗衣机",brand:"海尔",code:"E1",reason:"排水故障",suggestion1:"清理排水泵滤网",suggestion2:"检查排水管",suggestion3:"检查排水泵",suggestion4:"",hotLevel:880},
        {category:"洗衣机",subCategory:"滚筒洗衣机",brand:"海尔",code:"E2",reason:"门锁故障",suggestion1:"检查门是否完全关好",suggestion2:"检查门锁装置",suggestion3:"更换门锁",suggestion4:"",hotLevel:840},
        {category:"洗衣机",subCategory:"滚筒洗衣机",brand:"海尔",code:"E4",reason:"进水故障",suggestion1:"检查水龙头",suggestion2:"检查进水阀",suggestion3:"清理过滤网",suggestion4:"",hotLevel:810},
        {category:"洗衣机",subCategory:"滚筒洗衣机",brand:"海尔",code:"E5",reason:"加热故障",suggestion1:"检查加热管",suggestion2:"检查温度传感器",suggestion3:"检查控制板",suggestion4:"",hotLevel:770},
        {category:"洗衣机",subCategory:"滚筒洗衣机",brand:"海尔",code:"E6",reason:"水位传感器故障",suggestion1:"检查水位传感器",suggestion2:"检查气管连接",suggestion3:"",suggestion4:"",hotLevel:750},
        {category:"洗衣机",subCategory:"滚筒洗衣机",brand:"海尔",code:"E7",reason:"电机故障",suggestion1:"检查电机接线",suggestion2:"检查驱动板",suggestion3:"",suggestion4:"",hotLevel:720},
        // ===== 奥克斯洗衣机 =====
        {category:"洗衣机",subCategory:"波轮洗衣机",brand:"奥克斯",code:"E1",reason:"排水超时",suggestion1:"检查排水管是否堵塞",suggestion2:"检查排水阀",suggestion3:"清理排水口",suggestion4:"",hotLevel:800},
        {category:"洗衣机",subCategory:"波轮洗衣机",brand:"奥克斯",code:"E2",reason:"进水超时",suggestion1:"检查水龙头",suggestion2:"检查进水阀",suggestion3:"检查水压",suggestion4:"",hotLevel:780},
        {category:"洗衣机",subCategory:"波轮洗衣机",brand:"奥克斯",code:"E3",reason:"脱水异常",suggestion1:"重新整理衣物",suggestion2:"检查放置是否水平",suggestion3:"",suggestion4:"",hotLevel:750},
        {category:"洗衣机",subCategory:"波轮洗衣机",brand:"奥克斯",code:"E4",reason:"门盖故障",suggestion1:"检查门盖是否关好",suggestion2:"检查门锁开关",suggestion3:"",suggestion4:"",hotLevel:720},
        {category:"洗衣机",subCategory:"波轮洗衣机",brand:"奥克斯",code:"E5",reason:"水位传感器故障",suggestion1:"检查水位传感器",suggestion2:"检查气管",suggestion3:"更换传感器",suggestion4:"",hotLevel:700},
        {category:"洗衣机",subCategory:"滚筒洗衣机",brand:"奥克斯",code:"E1",reason:"排水故障",suggestion1:"清理排水泵滤网",suggestion2:"检查排水管是否堵塞",suggestion3:"",suggestion4:"",hotLevel:790},
        {category:"洗衣机",subCategory:"滚筒洗衣机",brand:"奥克斯",code:"E2",reason:"进水超时",suggestion1:"检查水龙头",suggestion2:"检查进水阀",suggestion3:"",suggestion4:"",hotLevel:760},
        {category:"洗衣机",subCategory:"滚筒洗衣机",brand:"奥克斯",code:"E3",reason:"门锁故障",suggestion1:"检查门是否关好",suggestion2:"检查门锁",suggestion3:"",suggestion4:"",hotLevel:730},
        {category:"洗衣机",subCategory:"滚筒洗衣机",brand:"奥克斯",code:"E4",reason:"加热故障",suggestion1:"检查加热管",suggestion2:"检查温度传感器",suggestion3:"",suggestion4:"",hotLevel:700},
        // 更多补充数据
        {category:"空调",subCategory:"变频挂机",brand:"格力",code:"F1",reason:"室内环境温度传感器故障",suggestion1:"检查传感器接线",suggestion2:"测量传感器阻值",suggestion3:"更换传感器",suggestion4:"",hotLevel:640},
        {category:"空调",subCategory:"变频挂机",brand:"格力",code:"F2",reason:"室内蒸发器温度传感器故障",suggestion1:"检查传感器是否脱落",suggestion2:"测量传感器阻值",suggestion3:"更换传感器",suggestion4:"",hotLevel:620},
        {category:"空调",subCategory:"变频挂机",brand:"格力",code:"F3",reason:"室外环境温度传感器故障",suggestion1:"检查室外传感器",suggestion2:"测量阻值",suggestion3:"",suggestion4:"",hotLevel:600},
        {category:"空调",subCategory:"变频挂机",brand:"格力",code:"F4",reason:"室外冷凝器温度传感器故障",suggestion1:"检查传感器",suggestion2:"测量阻值",suggestion3:"更换传感器",suggestion4:"",hotLevel:580},
        {category:"空调",subCategory:"变频挂机",brand:"格力",code:"F5",reason:"室外排气温度传感器故障",suggestion1:"检查排气温度传感器",suggestion2:"测量阻值",suggestion3:"",suggestion4:"",hotLevel:560},
        {category:"空调",subCategory:"变频挂机",brand:"美的",code:"E6",reason:"室外机故障",suggestion1:"检查室外机主板",suggestion2:"检查压缩机",suggestion3:"检查外机供电",suggestion4:"",hotLevel:690},
        {category:"空调",subCategory:"变频挂机",brand:"美的",code:"E8",reason:"静电除尘故障",suggestion1:"清洁静电除尘装置",suggestion2:"检查高压发生器",suggestion3:"",suggestion4:"",hotLevel:550},
        {category:"空调",subCategory:"变频挂机",brand:"海尔",code:"E3",reason:"室外环温传感器故障",suggestion1:"检查传感器",suggestion2:"测量阻值",suggestion3:"更换传感器",suggestion4:"",hotLevel:690},
        {category:"空调",subCategory:"变频挂机",brand:"海尔",code:"E4",reason:"室外盘管传感器故障",suggestion1:"检查传感器连接",suggestion2:"测量阻值",suggestion3:"",suggestion4:"",hotLevel:670},
        {category:"空调",subCategory:"变频挂机",brand:"海尔",code:"E5",reason:"室外排气传感器故障",suggestion1:"检查传感器",suggestion2:"更换传感器",suggestion3:"",suggestion4:"",hotLevel:650},
        {category:"空调",subCategory:"变频挂机",brand:"奥克斯",code:"E6",reason:"室外环温传感器故障",suggestion1:"检查传感器",suggestion2:"更换传感器",suggestion3:"",suggestion4:"",hotLevel:670},
        {category:"空调",subCategory:"变频挂机",brand:"奥克斯",code:"E7",reason:"室外盘管传感器故障",suggestion1:"检查传感器连接",suggestion2:"测量阻值",suggestion3:"更换传感器",suggestion4:"",hotLevel:650},
        {category:"洗衣机",subCategory:"波轮洗衣机",brand:"海尔",code:"F1",reason:"水位传感器接触不良",suggestion1:"检查水位传感器插头",suggestion2:"清洁传感器触点",suggestion3:"",suggestion4:"",hotLevel:680},
        {category:"洗衣机",subCategory:"波轮洗衣机",brand:"海尔",code:"F2",reason:"排水泵故障",suggestion1:"检查排水泵是否卡住",suggestion2:"清理排水泵异物",suggestion3:"更换排水泵",suggestion4:"",hotLevel:660},
        {category:"洗衣机",subCategory:"滚筒洗衣机",brand:"海尔",code:"F1",reason:"水位传感器故障",suggestion1:"检查传感器连接",suggestion2:"检查气管",suggestion3:"",suggestion4:"",hotLevel:700},
        {category:"洗衣机",subCategory:"滚筒洗衣机",brand:"美的",code:"E6",reason:"通讯故障",suggestion1:"检查主板通讯线路",suggestion2:"检查显示板",suggestion3:"",suggestion4:"",hotLevel:680},
        {category:"洗衣机",subCategory:"波轮洗衣机",brand:"美的",code:"E6",reason:"通讯故障",suggestion1:"检查通讯线连接",suggestion2:"检查主板",suggestion3:"",suggestion4:"",hotLevel:670},
        {category:"洗衣机",subCategory:"波轮洗衣机",brand:"格力",code:"E5",reason:"水位传感器故障",suggestion1:"检查水位传感器",suggestion2:"检查气管是否漏气",suggestion3:"",suggestion4:"",hotLevel:700},
        {category:"洗衣机",subCategory:"滚筒洗衣机",brand:"格力",code:"E5",reason:"水温传感器故障",suggestion1:"检查温度传感器",suggestion2:"测量传感器阻值",suggestion3:"更换传感器",suggestion4:"",hotLevel:680},
        {category:"空调",subCategory:"变频挂机",brand:"格力",code:"C5",reason:"跳线帽故障",suggestion1:"检查跳线帽是否脱落",suggestion2:"重新安装跳线帽",suggestion3:"",suggestion4:"",hotLevel:540},
        {category:"空调",subCategory:"变频挂机",brand:"格力",code:"H6",reason:"无室内电机反馈",suggestion1:"检查室内风机电机",suggestion2:"检查电机接线",suggestion3:"更换室内电机",suggestion4:"",hotLevel:630},
        {category:"空调",subCategory:"变频挂机",brand:"格力",code:"H7",reason:"同步信号异常",suggestion1:"检查压缩机",suggestion2:"检查驱动板",suggestion3:"",suggestion4:"",hotLevel:580},
        {category:"空调",subCategory:"变频挂机",brand:"美的",code:"P3",reason:"高低电压保护",suggestion1:"检查电源电压",suggestion2:"使用稳压器",suggestion3:"",suggestion4:"",hotLevel:660},
        {category:"空调",subCategory:"定频挂机",brand:"美的",code:"E4",reason:"T4传感器故障",suggestion1:"检查传感器",suggestion2:"更换传感器",suggestion3:"",suggestion4:"",hotLevel:710},
        {category:"空调",subCategory:"变频挂机",brand:"海尔",code:"F1",reason:"室内环温传感器故障",suggestion1:"检查传感器接线",suggestion2:"更换传感器",suggestion3:"",suggestion4:"",hotLevel:700},
        {category:"空调",subCategory:"变频挂机",brand:"海尔",code:"F2",reason:"室内盘管传感器故障",suggestion1:"检查传感器",suggestion2:"更换传感器",suggestion3:"",suggestion4:"",hotLevel:690},
        {category:"洗衣机",subCategory:"波轮洗衣机",brand:"奥克斯",code:"E6",reason:"电机故障",suggestion1:"检查电机接线",suggestion2:"检查电机电容",suggestion3:"更换电机",suggestion4:"",hotLevel:680},
        {category:"洗衣机",subCategory:"滚筒洗衣机",brand:"奥克斯",code:"E5",reason:"水位异常",suggestion1:"检查水位传感器",suggestion2:"检查进水阀",suggestion3:"",suggestion4:"",hotLevel:670},
        {category:"洗衣机",subCategory:"滚筒洗衣机",brand:"格力",code:"E6",reason:"通讯故障",suggestion1:"检查主板与显示板连接",suggestion2:"检查通讯线",suggestion3:"",suggestion4:"",hotLevel:660},
        {category:"洗衣机",subCategory:"波轮洗衣机",brand:"格力",code:"E6",reason:"通讯故障",suggestion1:"检查通讯线连接",suggestion2:"检查主板",suggestion3:"",suggestion4:"",hotLevel:650}
    ];

    // 品牌联系方式数据库
    const brandContacts = [
        {brand:"格力", phone:"400-836-5315", wechat:"格力电器"},
        {brand:"美的", phone:"400-889-9315", wechat:"美的服务"},
        {brand:"奥克斯", phone:"400-826-7777", wechat:"奥克斯空调"},
        {brand:"海尔", phone:"400-699-9999", wechat:"海尔服务"}
    ];

    // ==================== 子类映射 ====================
    const subCategoryMap = {
        "空调": ["变频挂机", "定频挂机", "变频柜机", "定频柜机", "天花机", "风管机"],
        "洗衣机": ["波轮洗衣机", "滚筒洗衣机"]
    };

    // ==================== 页面逻辑 ====================

    // 当前页面状态
    let currentPage = 'home';

    // 初始化
    document.addEventListener('DOMContentLoaded', function() {
        initCategoryListener();
        renderHotFaults();
        initCarousel();
    });

    // 电器大类选择联动
    function initCategoryListener() {
        const categorySelect = document.getElementById('category');
        const subCategorySelect = document.getElementById('subCategory');

        categorySelect.addEventListener('change', function() {
            const category = this.value;
            subCategorySelect.innerHTML = '';

            if (category && subCategoryMap[category]) {
                subCategorySelect.disabled = false;
                subCategorySelect.innerHTML = '<option value="">请选择电器小类</option>';
                subCategoryMap[category].forEach(function(sub) {
                    const opt = document.createElement('option');
                    opt.value = sub;
                    opt.textContent = sub;
                    subCategorySelect.appendChild(opt);
                });
            } else {
                subCategorySelect.disabled = true;
                subCategorySelect.innerHTML = '<option value="">请先选择电器大类</option>';
            }
        });
    }

    // 渲染热门故障
    function renderHotFaults() {
        const hotFaultsContainer = document.getElementById('hotFaults');
        const hotItems = faultDatabase
            .slice()
            .sort(function(a, b) { return b.hotLevel - a.hotLevel; })
            .slice(0, 6);

        // 去重（按品牌+代码）
        const seen = new Set();
        const uniqueHot = [];
        hotItems.forEach(function(item) {
            const key = item.brand + item.code;
            if (!seen.has(key)) {
                seen.add(key);
                uniqueHot.push(item);
            }
        });

        hotFaultsContainer.innerHTML = uniqueHot.slice(0, 6).map(function(item) {
            return '<div class="hot-fault-card" onclick="quickQuery(\'' + item.brand + '\',\'' + item.code + '\')">' +
                '<div class="brand-code">' + item.brand + ' ' + item.code + '</div>' +
                '<div class="fault-desc">' + item.reason + '</div>' +
                '</div>';
        }).join('');
    }

    // 轮播图
    function initCarousel() {
        let currentSlide = 0;
        const totalSlides = 3;
        const inner = document.getElementById('carouselInner');
        const dots = document.querySelectorAll('.carousel-dot');

        setInterval(function() {
            currentSlide = (currentSlide + 1) % totalSlides;
            inner.style.transform = 'translateX(-' + (currentSlide * 33.333) + '%)';
            dots.forEach(function(dot, i) {
                dot.classList.toggle('active', i === currentSlide);
            });
        }, 3000);
    }

    // 快速查询（点击热门故障）
    function quickQuery(brand, code) {
        document.getElementById('brand').value = brand;
        document.getElementById('faultCode').value = code;
        handleQuery();
    }

    // 执行查询
    function handleQuery() {
        const category = document.getElementById('category').value;
        const subCategory = document.getElementById('subCategory').value;
        const brand = document.getElementById('brand').value;
        const codeInput = document.getElementById('faultCode').value.trim().toUpperCase();

        if (!brand && !codeInput) {
            showToast('请至少输入品牌或故障代码');
            return;
        }

        // 支持多个故障代码查询
        const codes = codeInput.split(/[,，、\s]+/).filter(function(c) { return c; });

        let results = faultDatabase.filter(function(item) {
            let match = true;
            if (category) match = match && item.category === category;
            if (subCategory) match = match && item.subCategory === subCategory;
            if (brand) match = match && item.brand === brand;
            if (codes.length > 0) match = match && codes.indexOf(item.code) !== -1;
            return match;
        });

        // 去重
        const resultMap = new Map();
        results.forEach(function(item) {
            const key = item.brand + '-' + item.code + '-' + item.reason;
            if (!resultMap.has(key)) {
                resultMap.set(key, item);
            }
        });
        results = Array.from(resultMap.values());

        showResults(results, brand, codeInput);
    }

    // 显示查询结果
    function showResults(results, brand, code) {
        const resultContent = document.getElementById('resultContent');
        const resultTitle = document.getElementById('resultTitle');

        if (results.length === 0) {
            resultTitle.textContent = '查询结果';
            resultContent.innerHTML = renderNoResult();
        } else {
            resultTitle.textContent = (brand || '') + ' ' + (code || '') + ' 查询结果';
            let html = '';

            results.forEach(function(item) {
                const suggestions = [item.suggestion1, item.suggestion2, item.suggestion3, item.suggestion4]
                    .filter(function(s) { return s; });

                html += '<div class="result-group">' +
                    '<div class="result-group-header">' + item.brand + ' ' + item.code + ' - ' + item.subCategory + '</div>' +
                    '<div class="result-group-body">' +
                    '<div class="result-card" style="box-shadow:none;margin:0;padding:0;">' +
                    '<h3>🔍 故障原因</h3>' +
                    '<p class="reason-text">' + item.reason + '</p>' +
                    '</div>' +
                    '<div class="result-card" style="box-shadow:none;margin:0;padding:12px 0 0 0;">' +
                    '<h3>🔧 维修建议</h3>' +
                    '<ul class="suggestion-list">' +
                    suggestions.map(function(s, i) {
                        return '<li><span class="num">' + (i + 1) + '.</span><span>' + s + '</span></li>';
                    }).join('') +
                    '</ul>' +
                    '</div>' +
                    '</div></div>';
            });

            // 维修警告
            html += '<div class="warning-card">' +
                '<div class="warning-title">⚠️ 电器维修有风险</div>' +
                '<ul>' +
                '<li>不具备专业技能请勿自行拆机</li>' +
                '<li>部分维修需要专业工具和资质</li>' +
                '<li>建议优先联系品牌官方售后</li>' +
                '</ul></div>';

            // 联系方式
            const contact = brandContacts.find(function(c) { return c.brand === (results[0] && results[0].brand); });
            if (contact) {
                html += '<div class="contact-card">' +
                    '<div class="contact-item">' +
                    '<div><div class="label">官方维修电话</div><div class="value">' + contact.phone + '</div></div>' +
                    '<button class="action-btn" onclick="callPhone(\'' + contact.phone + '\')">拨打</button>' +
                    '</div>' +
                    '<div class="contact-item">' +
                    '<div><div class="label">官方公众号</div><div class="value">' + contact.wechat + '</div></div>' +
                    '<button class="action-btn" onclick="copyText(\'' + contact.wechat + '\')">复制</button>' +
                    '</div></div>';
            }

            resultContent.innerHTML = html;
        }

        switchPage('result');
    }

    // 无结果页面
    function renderNoResult() {
        return '<div class="no-result">' +
            '<div class="icon">🔍</div>' +
            '<h3>未找到相关故障信息</h3>' +
            '<div class="tips">' +
            '<div class="section-label">可能原因：</div>' +
            '<p>• 故障代码输入有误</p>' +
            '<p>• 该品牌/型号暂未收录</p>' +
            '<div class="section-label">建议尝试：</div>' +
            '<p>• 检查代码是否输入正确</p>' +
            '<p>• 尝试搜索常见故障代码（如 E6、F0、E1）</p>' +
            '<div class="section-label">如有其他问题：</div>' +
            '<p>• 欢迎联系客服微信：a13878048692</p>' +
            '</div></div>';
    }

    // 页面切换
    function switchTab(tab) {
        currentPage = tab;
        const tabItems = document.querySelectorAll('.tab-item');
        tabItems[0].classList.toggle('active', tab === 'home');
        tabItems[1].classList.toggle('active', tab === 'mine');

        document.getElementById('page-home').classList.toggle('active', tab === 'home');
        document.getElementById('page-mine').classList.toggle('active', tab === 'mine');
        document.getElementById('page-result').classList.remove('active');

        document.getElementById('page-title').textContent = tab === 'home' ? '家电故障查询' : '我的';
    }

    function switchPage(page) {
        document.getElementById('page-home').classList.toggle('active', page === 'home');
        document.getElementById('page-mine').classList.toggle('active', page === 'mine');
        document.getElementById('page-result').classList.toggle('active', page === 'result');

        if (page === 'result') {
            document.getElementById('page-title').textContent = '查询结果';
        }
    }

    function goBack() {
        switchTab('home');
    }

    // 拨打电话
    function callPhone(phone) {
        window.location.href = 'tel:' + phone;
    }

    // 复制文本
    function copyText(text) {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text).then(function() {
                showToast('已复制: ' + text);
            }).catch(function() {
                fallbackCopy(text);
            });
        } else {
            fallbackCopy(text);
        }
    }

    function fallbackCopy(text) {
        var textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        try {
            document.execCommand('copy');
            showToast('已复制: ' + text);
        } catch (e) {
            showToast('复制失败，请手动复制');
        }
        document.body.removeChild(textarea);
    }

    // Toast提示
    function showToast(msg) {
        var toast = document.getElementById('toast');
        toast.textContent = msg;
        toast.classList.remove('show');
        void toast.offsetWidth;
        toast.classList.add('show');
        setTimeout(function() {
            toast.classList.remove('show');
        }, 2000);
    }
