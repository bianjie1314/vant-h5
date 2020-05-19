<template>
    <div class="businessContiner">
         <van-dialog
            v-model="showView"
            :close-on-popstate =true
            :close-on-click-overlay = true
            title="《民生通讯客户入网服务协议》"
            :show-confirm-button = false
            style='height:70%;' 
            >
            <div class="businessContiner-contract">
                <div class="businessContiner-contract-user">用户(甲方): {{userA}}</div>
                <div class="businessContiner-contract-user">通信运营企业(乙方):民生通讯（深圳）有限公司</div>
                <div class="businessContiner-contract-warining">友好提示:</div>
                <div class="businessContiner-contract-text">
                    甲方务必审慎阅读，特别是加粗显示的部分，以及与甲方权益具有或者有可能具有重大关系的条款，及对乙方具有免责或限制责任的条款，理解并遵守《民生通讯（深圳）有限公司客户入网服务协议》，如甲方对本协议有任何疑问的，应联系乙方客服进行咨询。当甲方阅读并勾选“阅读并同意入网服务协议”后，或甲方以其他乙方允许的方式实际使用乙方的移动通信服务时，即表示甲方已充分阅读、理解并同意接受本协议的全部内容的约束，本协议将立即生效。甲方承诺接受并遵守本协议的约定，届时甲方不应以未阅读本协议的内容等理由，主张本协议无效，或要求撤销本协议。
                </div>
                <div class="businessContiner-contract-text">
                    甲方应当是具备完全民事权利能力和完全民事行为能力的年满18周岁的自然人、法人或其他组织。若甲方不具备前述主体资格，则甲方及甲方的监护人应承担因此而导致的一切后果，且乙方有权单方解除协议、终止服务、收回号码、不退还甲方剩余通信费、不退还甲方剩余未使用的（如有）包括语音、流量、短信在内的通信资源，并保留追究甲方及甲方监护人违约责任的权利。 根据《中华人民共和国合同法》、《中华人民共和国电信条例》等有关法律、条例规定，甲乙双方在平等、自愿、公平、诚信的基础上，基于对乙方移动通信服务的了解和需求，甲方自愿申请成为乙方移动用户，并达成协议如下：
                </div>
                <div class="businessContiner-contract-sort-title">第一条&nbsp;&nbsp;网络服务</div>
                <div class="businessContiner-contract-text">
                    1.乙方在现有技术条件下的网络覆盖范围内，向甲方提供通信服务。国际漫游服务只能在与乙方签订漫游协议的电信运营商网络覆盖范围内享有。
                </div>
                <div class="businessContiner-contract-text">
                    2.乙方提供的网络服务应符合国家规定的通信质量标准。乙方依法保障甲方的通信自由和通信秘密。
                </div>
                <div class="businessContiner-contract-text">
                    3.凡通过甲方号码发生的通信及办理业务的行为均被视为甲方或甲方授权的行为。
                </div>
                <div class="businessContiner-contract-text">
                    4.对于本协议所述的通知，乙方可以通过公告、400-6509-170服务热线、网上营业厅http://www.ms170.cn/、账单、短信、电子邮件等方式之一通知客户。并且乙方通过受到影响地区的主要报刊、广播或电视任一途径进行公告，也视为已通知客户。
                </div>
                <div class="businessContiner-contract-sort-title">第二条&nbsp;&nbsp;入网要求</div>
                <div class="businessContiner-contract-text">
                    1.乙方订单实施电子化档案管理方案，用户的所有信息均将实现电子化管理，且根据号卡实名制的相关法律法规，所有入网用户必须严格遵守实名制相关要求。因此，甲方在办理入网时，即默认同意提供实名制资料，并且应仔细阅读电子版入网协议等相关内容、准确填写或提供入网资料、提交个人有效身份证件原件的电子版照片及手持身份证、号卡的人证卡合一照，否则乙方有权利不接受甲方的入网申请。
                </div>
                <div class="businessContiner-contract-text">
                    2.甲方应使用国家给予入网许可标志的移动电话终端设备，当申请开通默认服务以外的服务项目时，移动电话终端设备还应具备相应功能，否则将无法支持所选服务，甲方将自行承担损失。
                </div>
                <div class="businessContiner-contract-text">
                    3.为确保通信服务不被他人冒用或非法使用，甲方在收到SIM卡后需要按照乙方官网提示步骤进行激活操作，SIM卡被成功激活后，乙方不再接受退货。如甲方在成功激活前提出退货申请，甲方需承担相关邮寄费用。
                </div>
                <div class="businessContiner-contract-text">
                    4.如果甲方所填写的信息不符合通信业务的入网条件、甲方拒绝提供其证件上所记载的身份信息、甲方冒用他人证件或者使用伪造、变造的证件的，乙方及乙方授权的线下终端网点有权不为其办理入网手续。
                </div>
                <div class="businessContiner-contract-text">
                    5.甲方办理需要配送的业务时，需清楚准确的填写真实姓名、送货地址及联系方式, 且此资料乙方仅用于甲方所购号卡的邮寄使用，订单遇到问题时联系用户使用。因如下情况造成订单延迟或无法配送等，乙方将不承担责任：
                </div>
                <div class="businessContiner-contract-text">
                    a)因甲方提供错误联系信息或不详细的地址导致无法联系的；
                </div>
                <div class="businessContiner-contract-text">
                    b)商品送达无人签收或收件人身份证件不符，由此造成的重复配送乙方将视情况适当收取配送费；
                </div>
                <div class="businessContiner-contract-text">
                    c)如经多次投递，无法与甲方联系或因甲方的原因无法签收，乙方将视同甲方放弃购买，并且乙方将视情况适当收取配送费。
                </div>
                <div class="businessContiner-contract-sort-title">第三条&nbsp;&nbsp;客户资料</div>
                <div class="businessContiner-contract-text">
                    1.甲方应保证入网登记资料真实有效、准确完整，并有义务配合乙方对登记资料进行核实。协议有效期内，甲方登记资料如有变更，应主动办理变更手续。如乙方发现甲方登记资料失实或不准确，乙方有权不接受甲方的入网申请，还可停止对甲方的服务。
                </div>
                <div class="businessContiner-contract-text">
                    2.因甲方提供的客户资料不详、不实或变更后未通知乙方并办理变更手续等原因，使乙方无法向甲方提供服务的，乙方不承担相应责任。
                </div>
                <div class="businessContiner-contract-text">
                    3.服务密码是甲方办理业务的重要凭证，凡使用服务密码办理业务的行为均被视为甲方或甲方授权的行为。因此引起的后果、义务与责任均由甲方承担。甲方入网后应立即修改初始服务密码，并妥善保管，包括但不限于因甲方未及时修改初始服务密码或泄露服务密码导致的影响和损失，由甲方自行承担。
                </div>
                <div class="businessContiner-contract-text">
                    4.乙方对甲方提供的信息资料依法负有保密义务，但法律法规另行规定的除外， 且此入网资料仅用于本次入网使用，乙方不会收取甲方用于办理入网和发货以外的任何信息。
                </div>
                <div class="businessContiner-contract-sort-title">第四条&nbsp;&nbsp;费用标准和费用交纳</div>
                <div class="businessContiner-contract-text">
                    1.乙方应在国家电信资费主管部门允许的范围内设定资费标准、向客户明码标价，公告计费方式、缴费期限等信息；甲方应在乙方明示的期限内足额交纳各项通信费用。
                </div>
                <div class="businessContiner-contract-text">
                    2.如遇国家统一调整通信费用标准的，按国家统一规定的时间执行。如遇乙方发布、调整资费的，在乙方通知确定的生效日起执行。在生效日前，甲方未提出异议的视为同意，协议继续履行；甲方提出异议且未能与乙方达成一致的，协议终止。
                </div>
                <div class="businessContiner-contract-text">
                    3.计费周期为自然月，即每月1日00:00至当月最后一日24:00。（由于网络设备产生话单及相关处理会有时延，可能会发生当月部分话费计入后期话费中收取的情况。）
                </div>
                <div class="businessContiner-contract-text">
                    4.甲方订制第三方增值业务或其它收费业务，则视为同意乙方代第三方向甲方收取信息费、功能费等，甲方使用第三方提供的增值业务或其它收费业务由第三方制定收费标准并公布。若甲方对收取的代收费业务服务费有异议，可在乙方协助下与第三方服务商协商解决。
                </div>
                <div class="businessContiner-contract-text">
                    5.因甲方手机终端中的软件原因（包括但不限于自动升级等）产生的网络流量，甲方应承担该笔流量所产生的费用。
                </div>
                <div class="businessContiner-contract-text">
                    6.甲方如需开通国际及台港澳业务，乙方可根据甲方的信用评级情况要求甲方交纳一定的预付款。
                </div>
                <div class="businessContiner-contract-text">
                    7.甲方交费过程中因甲方提供号码不正确造成的交费错误，具体责任由甲方承担。
                </div>
                <div class="businessContiner-contract-text">
                    8. 如甲方购买需按月承诺消费的号码，则需要执行以下内容：
                </div>
                <div class="businessContiner-contract-text">
                    a)甲方所购号码月承诺消费期为无固定协议期。自本协议生效当月起，该号码不得办理协议变更、协议取消、重新入网等业务，按协议约定执行相关内容至该号码销号为止。
                </div>
                <div class="businessContiner-contract-text">
                    b)自本协议生效当月起，甲方保证所购号码每月消费总额不低于已办理业务方案的月承诺消费金额并及时足额缴纳。
                </div>
                <div class="businessContiner-contract-text">
                    c)自本协议生效当月起，如甲方每月实际发生的消费总额小于约定的月承诺消费金额，乙方有权按照约定的月承诺消费金额向甲方收取费用；如甲方每月的实际消费总额大于约定的每月承诺消费金额，则乙方按实际发生的通信费数额向甲方收取费用，超出部分须甲方按月自行交纳。
                </div>
                <div class="businessContiner-contract-sort-title">第五条&nbsp;&nbsp;优惠活动</div>
                <div class="businessContiner-contract-text">
                    1.在符合条件的情况下，甲方可自愿参加乙方的优惠活动。
                </div>
                <div class="businessContiner-contract-text">
                    2.优惠活动是指乙方通过“话费优惠（例如存费送费、购机送费）、终端优惠（例如存费送机）、赠送业务或礼品”等方式向符合条件的甲方提供各类优惠通信产品。
                </div>
                <div class="businessContiner-contract-text">
                    3.优惠活动均可能存有时间、人数、条件等诸多限制，并非所有甲方均有资格参加。优惠活动详情以乙方不时发布的优惠活动通知为准。
                </div>
                <div class="businessContiner-contract-text">
                    4.甲方依据本协议使用所购买的通信服务、通信卡、用户号码，同时在协议期内（协议期详见综合业务受理单）连续在网使用乙方通信服务的情况下，在符合优惠活动的具体条件的前提下，甲方基于主动自愿参加的明确意思表示，并与乙方达成合意一致后，方可参加乙方提供的优惠活动。
                </div>
                <div class="businessContiner-contract-sort-title">第六条&nbsp;&nbsp;风险控制</div>
                <div class="businessContiner-contract-text">
                    1.甲方应妥善保管自己的移动电话不被非法盗用或非法使用，若发现通信费用异常增长，经初步核查确有问题的，可及时拨打客服热线400-6509-170办理暂时停机手续，并向公安机关报案，乙方应积极配合公安部门调查相关情况，但乙方不承担上述情形对甲方所造成的不良后果。
                </div>
                <div class="businessContiner-contract-text">
                    2.甲方话费余额（该余额不包含【赠送话费余额】）低于0元时，乙方有权对甲方号码进行停机处理，停机3个自然月仍未缴费的，乙方可无条件对码号进行销户处理。
                </div>
                <div class="businessContiner-contract-text">
                    3.甲方存在欠费时，乙方有权暂停甲方网络服务；欠费满3个自然月，乙方有权终止提供电信服务（即：“销户”）和解除协议，并可以通过信函、公告、委托第三方等方式追缴全部欠费。
                </div>
                <div class="businessContiner-contract-text">
                    4.甲方存在欠费或存有违法行为的情况下，乙方有权拒绝为甲方开办其他业务，直至其补交全部欠费或违法行为得到纠正并书面保证不再发生。
                </div>
                <div class="businessContiner-contract-text">
                    5.甲方发送违法违规及其他违反公序良俗内容的信息，或未经接收客户同意发送商业广告信息的，乙方有权依据接收客户举报或投诉关闭甲方信息发送功能甚至暂停甲方的网络服务。
                </div>
                <div class="businessContiner-contract-text">
                    6.甲方在未付的通信费用超过话费信用额度时或存在欠费或存有违法行为的情况下，乙方有权拒绝为甲方开办其他业务，直至其补交全部欠费及违约金货违法行为得到纠正并书面保证不再发生。
                </div>
                <div class="businessContiner-contract-text">
                    7.一方违约给对方造成损失的，应当依法承担赔偿责任，但任何一方应承担的赔偿损失的责任范围不包括对方未实现的预期利润或利益、商业信誉的损失、数据的丢失、第三方损失及其他间接损失。
                </div>
                <div class="businessContiner-contract-sort-title">第七条&nbsp;&nbsp;客户行为规范</div>
                <div class="businessContiner-contract-text">
                    1、严禁甲方在乙方提供通信服务期间使用乙方号卡拨打声讯电话，包括但不限于直接拨打或通过呼叫转移等方式拨打；
                </div>
                <div class="businessContiner-contract-text">
                    2、严禁甲方将乙方号卡用于以非法赢利为目的的商业活动或交易行为，包括但不限于以类似公用电话的方式向不特定多数人有偿出租、出借、倒卖、转售乙方号卡或使用乙方号卡向不特定多数人进行电话营销、传播广告等。
                </div>
                <div class="businessContiner-contract-text">
                    3、严禁使用乙方号卡从事违法犯罪活动，包括但不限于用拨打特定号码并实现话费套利或赚取回扣的行为；利用乙方号卡传播非法言论，散播虚假新闻，制造社会恐慌；利用乙方号卡从事电话诈骗行为。
                </div>
                <div class="businessContiner-contract-text">
                    4、严禁将乙方号卡直接投入业务范围或服务内容包含语音呼叫服务（不论有偿或无偿）、短信发送服务（不论有偿或无偿）的企业或实体使用。禁止呼叫中心（包括但不限于企业售后服务中心，客户回访中心）移动秘书台等类似性质的单位利用乙方号卡接听、拨打电话或发送短信。一旦发现，乙方有权立即停机（限制呼入、呼出）甚至销号。
                </div>
                <div class="businessContiner-contract-text">
                    5、严禁甲方在乙方提供通信服务恶意超余量的呼出行为（包括但不限于长期不挂机、超发短信），一经发现立即停机（限制呼入、呼出）甚至销号。
                </div>
                <div class="businessContiner-contract-text">
                    6、当甲方出现上述任何一种情形时，视为已经超出使用权限，乙方有权视情况采用提示、通知、警告、限期整改、限制呼入或呼出、销号等方式阻止甲方超权限使用通信服务。
                </div>
                <div class="businessContiner-contract-text">
                    7、如甲方的行为给乙方造成重大经济损失，乙方有权视情节轻重和甲方主观恶意程度向甲方提出索赔。情节严重涉嫌犯罪的，乙方将依法追究相关人员的刑事责任。
                </div>
                <div class="businessContiner-contract-text">
                    8、乙方对明确禁止的行为已向甲方做了充分的说明和提示。如有调整，乙方将以网站公示的方式通知甲方。乙方对上述使用须知拥有最终解释权。因甲方违反上述禁止约定，导致乙方停止提供通讯服务并销号的，甲方已经支付的购买乙方号卡的款项，无论是否还有余额，乙方均不再退还。
                </div>
                <div class="businessContiner-contract-sort-title">第八条&nbsp;&nbsp;网络及客户服务</div>
                <div class="businessContiner-contract-text">
                    1.乙方为甲方提供的移动通信服务应当达到国家的相关标准，不得低于《电信服务规范》所规定的通信质量指标。
                </div>
                <div class="businessContiner-contract-text">
                    2.乙方向甲方提供客户服务电话400-6509-170、网上营业厅http://www.ms170.cn/，以便甲方咨询了解乙方网络服务、业务推广、各类营销优惠活动等内容。乙方还应向甲方免费提供通话所在地（仅限国内不含台港澳）火警119、匪警110、医疗急救120等公益性电信服务（具体以官网公布信息为准）。
                </div>
                <div class="businessContiner-contract-text">
                    3.乙方免费提供给甲方最近5个月的通话详单查询、月结帐单查询（不含查询当月）。若甲方对乙方收取的费用存有异议，应在异议费用发生后5个月内向乙方提出(系统产生用户话单当月起后5个月，不含当月)。经核实确属乙方责任多收费用的，乙方应将已多收的部分返还甲方。
                </div>
                <div class="businessContiner-contract-text">
                    4.乙方向甲方提供需要甲方支付月功能费的服务项目时，应征得甲方同意；乙方开通服务项目让客户进行体验时，不得收取服务项目月功能费。对于没有约定终止期限的业务，甲方有权提前一个月向乙方申请终止业务，乙方提前一个月通知甲方后有权终止提供该业务。
                </div>
                <div class="businessContiner-contract-text">
                    5.乙方有义务采取公布监督电话等形式受理甲方投诉，并在接到投诉后的合理期限内答复甲方。
                </div>
                <div class="businessContiner-contract-text">
                    6.乙方不得侵害甲方的通信自由和通信秘密，对甲方的客户资料负有保密义务，但根据法律法规，乙方有义务配合法定机关对客户通信、资料、数据的调查取证工作。
                </div>
                <div class="businessContiner-contract-sort-title">第九条&nbsp;&nbsp;号码变更与转让</div>
                <div class="businessContiner-contract-text">
                    1.甲方欲转让移动号码使用权应先缴清通信费等所有费用，转让时须由甲方（及其监护人）及第三人各方持有效证件原件（委托他人办理的应同时提交本人及代理人/监护人有效证件及授权书）通过乙方指定方式办理变更登记手续。在甲方结清所有费用后，由第三人与乙方重新签订客户入网服务协议，本协议自动终止；在办理变更手续之前，因使用该号码导致的交费义务及一切后果仍由甲方承担。
                </div>
                <div class="businessContiner-contract-text">
                    2.在甲方通过过户成为新机主的情形下，如因原机主未亲自到场办理过户而导致原机主就此提出异议，甲方应无条件放弃因过户产生的全部权益，并承担由此对原机主及对乙方造成的一切损失。过户代理人对此承担连带责任。
                </div>
                <div class="businessContiner-contract-sort-title">第十条&nbsp;&nbsp;移动通信卡规定</div>
                <div class="businessContiner-contract-text">
                    1.甲方可自行设置和清除移动通信卡的个人识别码(初始密码为手机号码后六位)，连续三次输入错误密码将会锁卡。发生锁卡时，请勿自行解锁，应按照乙方客服人员提示操作步骤进行规定操作。因甲方操作不当致使移动通信卡损坏或锁死的，甲方应自行承担换卡所需费用。
                </div>
                <div class="businessContiner-contract-text">
                    2.协议期内，甲方若发生移动通信卡遗失、被盗、人为损坏等情形，可向乙方申请办理"停机"、"补卡"业务，避免损失扩大。甲方不能以此为由拒绝按本协议约定支付通信费用。
                </div>
                <div class="businessContiner-contract-sort-title">第十一条&nbsp;&nbsp;不可抗力</div>
                <div class="businessContiner-contract-text">
                    因不可抗力导致本协议部分或全部不能履行的，双方可部分或全部免除责任。
                </div>
                <div class="businessContiner-contract-sort-title">第十二条&nbsp;&nbsp;技术进步</div>
                <div class="businessContiner-contract-text">
                    因技术进步或依据国家有关政策，乙方为提升服务质量对移动电话网络进行整体换代升级而导致移动通信服务无法继续履行的，乙方应该至少提前90日发布公告，并提出合理的解决方案。甲方可就解决方案与乙方协商，但不得要求乙方继续履行本协议。
                </div>
                <div class="businessContiner-contract-sort-title">第十三条&nbsp;&nbsp;协议的变更</div>
                <div class="businessContiner-contract-text">
                    乙方在本协议外以公告、使用手册、资费单页等书面形式公开做出的确定且明确的服务承诺，甲方办理各类业务所签署的表单、业务协议等均自动成为本协议的补充协议；与本协议冲突部分以补充协议为准，补充协议中未约定部分以本协议为准。
                </div>
                <div class="businessContiner-contract-sort-title">第十四条&nbsp;&nbsp;协议的解除</div>
                <div class="businessContiner-contract-text">
                    1.除双方另有约定外，甲方要求终止网络服务的，应在缴清相关费用后办理退网手续，话费余额等按照乙方业务规定和双方约定进行处理。
                </div>
                <div class="businessContiner-contract-text">
                    2.有下列任一情形的，乙方有权终止提供通信服务（即：“销户”）和解除协议：
                </div>
                <div class="businessContiner-contract-text">
                    a)甲方没有预存款，也没有任何业务余量，连续3个月未使用乙方提供的通信服务的（包括但不限于未主动发送短信、未拨打或接听电话、未使用数据流量、未使用呼叫转移）
                </div>
                <div class="businessContiner-contract-text">
                    b)由于产品资费升级，甲方订购的原有产品服务已经过期清零并已经退出市场，经乙方提前三个月通知后，而甲方未及时订购新的产品包、新资费套餐的；
                </div>
                <div class="businessContiner-contract-text">
                    3. 有下列任一情形的，乙方有权终止提供通信服务（即：“销户”）和解除协议，收回号码或账号，并保留追究甲方违约责任的权利。甲方如有已支付未消耗的通信服务费用不予退还且乙方还可以通过信函、公告、委托第三方等方式追缴全部欠费和违约金。
                </div>
                <div class="businessContiner-contract-text">
                    a)甲方提供的有效证件（包括代理人或监护人提供的有效证件）虚假不实；
                </div>
                <div class="businessContiner-contract-text">
                    b)利用号码或乙方提供的服务从事违法犯罪活动或损害社会公共利益的活动或其它不当用途；
                </div>
                <div class="businessContiner-contract-text">
                    c)乙方收到国家行政管理部门或其他相关部门发文要求停止甲方网络服务；
                </div>
                <div class="businessContiner-contract-text">
                    d)甲方收到手机号码后，在30天内未激活的；
                </div>
                <div class="businessContiner-contract-text">
                    e)甲方欠费停机后（含欠费停机当月）3个月内仍未缴清通信费用和违约金的；
                </div>
                <div class="businessContiner-contract-text">
                    f)甲方违反本协议下第七条约定的客户行为规范；
                </div>
                <div class="businessContiner-contract-text">
                    g)违规外呼，呼叫频次异常的；
                </div>
                <div class="businessContiner-contract-text">
                    h)涉及通信诈骗、骚扰电话、垃圾短信的；
                </div>
                <div class="businessContiner-contract-text">
                    i)业务（服务）超过约定有效期的。
                </div>
                <div class="businessContiner-contract-sort-title">第十五条&nbsp;&nbsp;争议解决方式</div>
                <div class="businessContiner-contract-text">
                    有关协议争议，双方可沟通协商解决；协商不成的，甲方可向当地通信管理局或消费者协会申请进行调解；任何一方均可向乙方住所地的人民法院起诉。
                </div>
                <div class="businessContiner-contract-sort-title">第十六条&nbsp;&nbsp;协议生效</div>
                <div class="businessContiner-contract-text">
                    1.本协议自双方签字盖章且业务开通之日起生效，有效期一年。到期后，若双方均无异议，本协议以一年为周期逐年自动顺延。
                </div>
                <div class="businessContiner-contract-sort-title">第十七条&nbsp;&nbsp;其他</div>
                <div class="businessContiner-contract-text">
                    1．客户入网后可委托第三方办理业务（乙方不允许代办的业务除外）；第三方持有客户有效身份证件原件即视为客户的代理人，有权代客户办理业务。
                </div>
                <div class="businessContiner-contract-text">
                    2．由于乙方客户号码数量有限，客户名下的号码数量不得超过乙方规定的限额。客户现在或曾经持有的任一号码发生欠费的，客户应缴清欠费才得办理新的号码入网手续。
                </div>
                <div class="businessContiner-contract-text">
                    3．客户入网或者办理业务时，乙方可以复印、扫描或者拍照客户身份证件。
                </div>
                <div class="businessContiner-contract-text">
                    4．客户入网或者办理业务时，乙方可以要求客户通过手写板签字的电子方式签名；客户认可上述手写板签名的数字化图像为可靠、有效的签名。
                </div>
                <div class="businessContiner-contract-text">
                    5.客户办理各类业务所签署的业务受理单、表单、协议等为本协议的补充协议，与本协议冲突部分以补充协议为准，补充协议中未约定部分以本协议为准。
                </div>
                <div class="businessContiner-contract-text">
                    甲方（监护人、代理人）承诺：已详细阅读本协议的全部条款，在签署本协议后即视为完全理解并同意接受本协议的全部条款。即使之前乙方存有任何书面或口头的介绍、广告、演示等，各方均以经书面签署的本协议为约束各方权利义务的有效文本，取代之前所有的可能存在的口头或书面的资料、文本。
                </div>
                <div class="businessContiner-contract-text">
                    在本入网协议书中，可能涉及免除乙方责任，或导致甲方承担责任的条款，已经以特别提示和加粗的方式向甲方明确释明，在此，甲方确认，对该等条款已经充分注意，并同意签署本入网协议书。
                </div>
                <div class="businessContiner-contract-text">
                    本次用户入网协议最终解释权归民生通讯（深圳）有限公司所有。
                </div>
                <div  class="businessContiner-contract-user">
                    甲方（签名或盖章）：{{userA}}
                </div>
                <div  class="businessContiner-contract-user">
                    乙方（盖章）：
                </div>
                <div class="businessContiner-contract-user">
                    签署日期：{{popuTime}}
                </div>
                <div class="businessContiner-contract-btn">
                    <van-button type="primary" @click="showContractClick" size="large">我已阅读</van-button>
                </div>
            </div>
            
        </van-dialog>
    </div>
   
    
</template>

<script>

export default {
    name: 'contract',
    props: {
        userA: {//甲方
            type:String,
            default:''
        },
        popuTime:{//协议时间
            type:String,
            default:''
        },
        readContract: {
            type:Boolean,
            default:true
        },
        showContract: {
            type:Boolean,
            default:true
        }
    },
    data(){
        return{
            showView:this.showContract
        }
    },
    watch:{
        showView(val){
            this.$emit('update:showContract',val);
        },
        showContract(val){
            this.showView = val;
        }
    },
    methods: {
        showContractClick() {
            this.$emit('showContractClick');
        }
    }
}
</script>

<style lang="less">
.businessContiner{
    &-contract{
        margin: 0px 10px 10px 10px;
        overflow-y: auto;
        
        height:400px;
        &-user{
            font-size: 12px;
            color:rgb(44, 18, 18);
            margin-top: 5px;
        }
        &-warining{
            font-size: 12px;
            text-indent: 2em;
            margin-top: 5px;
        }
        &-text{
            font-size: 10px;
            margin-top: 5px;
            color: #2d3741;
            text-indent: 2em;
        }
        &-sort-title{
            margin-top: 10px;
            font-size: 14px;
            text-indent: 1em;
        }
        &-btn{
            margin-top: 10px;
            margin-bottom: 50px;
        }
    }
}


.van-cell{
    color: #20A0FF !important;
}
.van-field__control{
    color: rgb(122, 124, 126) !important;
}

</style>
