import { useNavigation } from '@react-navigation/native';
import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import RNExitApp from 'react-native-exit-app';
import { Text, View, StatusBar, ScrollView, TouchableOpacity, ToastAndroid } from 'react-native';
import { Checkbox } from 'react-native-material-ui';
import styles from './style';


const { height, width } = Dimensions.get('window')

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            points: 80,
            isModalVisible: false,
            index: 1,
            masterDataActivity: [],
            search: '',
            isDataNull: false,
            isAgreed: false,
        };
    }
    checker = () => {
        return this.setState({ isAgreed: !this.state.isAgreed })
    }
    _handleDecline = () => {
        //         alert(`You have to agree the Agreement
        // In order to go forward. `)
        RNExitApp.exitApp();
    }
    render() {
        const { navigation } = this.props;
        return (
            <View style={{
                flex: 1,
                backgroundColor: 'black'
            }} >
                <View style={{
                    flex: 1,
                    backgroundColor: 'black',
                    // marginTop: 20,
                    // marginBottom: height * .024,
                    marginLeft: width * .008,
                    marginRight: width * .008,
                }} >
                    <StatusBar backgroundColor="black" barStyle="default" hidden={true} showHideTransition={'fade'} />
                    <Text style={styles.heading}>NON-DISCLOSURE AGREEMENT</Text>
                    <ScrollView
                        style={styles.innerAgreement}                    >
                        <Text style={styles.agreeText}>This Non-Disclosure Agreement (“<Text style={styles.agreeBoldText} >Agreement</Text>”) is entered between (1) <Text style={styles.agreeBoldText} >Rover Concepts Ltd Co</Text>, and (2)User of Counts Application.{'\n'}</Text>

                        <Text style={styles.agreeText}><Text style={styles.agreeBoldText}>WHEREAS</Text>, the Discloser may provide certain confidential and proprietary information to the Recipientin relation to certain authorized purpose as specified by the Discloser before or after the disclosure(“<Text style={styles.agreeBoldText} >Authorized Purpose</Text>”), which the Discloser seeks to keep confidential.{'\n'}</Text>

                        <Text style={styles.agreeText}><Text style={styles.agreeBoldText} >NOW THEREFORE</Text>, in consideration for the mutual undertakings of the Discloser and the Recipientunder this Agreement, the parties hereby agree as follows:</Text>
                        <View style={{ borderWidth: width * .001, borderColor: 'white' }} ></View>
                        <View style={{ flexDirection: 'row' }} >
                            <View style={{ flex: 1 }}>
                                <Text style={styles.agreeBoldText}>{'\n'}1.Confidential Information{'\n'}</Text>
                                <Text style={styles.agreeText}>For all intents and purposes of this Agreement,<Text style={{ fontWeight: 'bold' }, styles.agreeText} >“Confidential Information”</Text> shall mean anyinformation or material which is proprietary tothe Discloser, whether or not owned ordeveloped by the Discloser, which is notgenerally known other than by the Discloser,and which the Recipient may obtain throughany direct or indirect contact with the Discloser,whether in tangible or intangible form,whenever and however disclosed, including, butnot limited to:{'\n'}</Text>
                                <Text style={styles.agreeText}>
                                    (i) Any business records and plans, consumeror client feedback, reviews, onlineaccounts;{'\n'}{'\n'}
                        (ii) Any form of scientific, technical or datainformation, website identification, passwords, technical and business information relating to Discloser’s proprietary ideas;{'\n'}{'\n'}
                        (iii) Any concepts, reports, data, knowledge, works in progress, information, tradesecrets, trademarks, patentable or non-patentable ideas, copyrights, existing and/or contemplated products and services, software, codes, schematics, research and development, minimum viable product(MVP), proof of concept (POC), prototypes, and test rigs;{'\n'}{'\n'}
                        (iv) Any form of financial information, production, costs, profit and margin information, finances and financial projections, customers, clients, marketing, sales leads, strategic alliances, partners,and current or future business plans andmodels;{'\n'}{'\n'}
                        (v) Any information concerning the Authorized Purpose, including the existence of this Agreement; and{'\n'}{'\n'}
                        (vi) Any other information that should reasonably be recognized as confidential information of the Discloser.
                        </Text>
                                <Text style={styles.agreeBoldText}>{'\n'}3.Rights in Confidential Information{'\n'}</Text>
                                <Text style={styles.agreeText}>Neither this Agreement, nor the act of disclosure, confers upon the Recipient any right, license, interest or title to the Confidential Information of the Discloser.Title to the Confidential Information shall remain solely in the Discloser and any type or manner of improvements or modifications there of by the Recipient shall remain the sole property of the Discloser. Recipient may not use the Confidential Information except as contemplated by this Agreement and any such use by the Recipient shall be solely for the benefit of the Discloser.</Text>

                                <Text style={styles.agreeBoldText}>{'\n'}5.No Warranty{'\n'}</Text>
                                <Text style={styles.agreeText}>The Recipient acknowledges that all Confidential Information is provided by Discloser on "AS IS" basis and without any warranty, express, implied or otherwise, regarding the Confidential Information's completeness, accuracy or performance. The Discloser shall not have any liability towards the Recipient, or its Representatives, resulting from any use of the Confidential Information.</Text>

                                <Text style={styles.agreeBoldText}>{'\n'}7.Return/Destruction of Confidential Information{'\n'}</Text>
                                <Text style={styles.agreeText}>Upon the request of the Discloser, the Recipient shall collect and surrender, or confirm the destruction or non-recoverable data erasure of, all Confidential Information and all copies thereof, regardless of form, and any such destruction shall be certified in writing to the Discloser by an authorized officer of the Recipient supervising such destruction.</Text>

                                <Text style={styles.agreeBoldText}>{'\n'}9.Notices{'\n'}</Text>
                                <Text style={styles.agreeText}>All notices hereunder shall be in writing and delivered to the addresses set forth at the outset of this Agreement, or to new or additional addresses as may be designated in writing by either Party. All notices hereunder shall be deemed given (a) when received, if delivered personally or by an express courier with a reliable system for tracking delivery, (b) when sent by facsimile with a copy sent by another means specified in this paragraph; or (c) when mailed by registered or certified mail, return receipt requested. Each party agrees that facsimile signatures will have the same legal effect as original signatures and may be used as evidence of execution.</Text>

                                <Text style={styles.agreeBoldText}>{'\n'}11.Miscellaneous{'\n'}</Text>
                                <Text style={styles.agreeText}>
                                    (i)	This Agreement does not create a joint venture or partnership between the Parties and no Party is obligated to enter into any further contract or business relationship with the other Party.  No provision of this Agreement shall affect, limit or restrict either Party’s right to engage in any business in any place and at any time, whatsoever, provided the Recipient does not disclose the Confidential Information in breach of this Agreement.{'\n'}{'\n'}
                                (ii) This Agreement, its validity, construction and effect shall be governed by the laws of the State of Texas, U.S.A., excluding its conflicts of law rules.{'\n'}{'\n'}
                                (iii) This Agreement supersedes any and all prior or contemporaneous understandings and agreements between the Parties with respect to the subject matter of this Agreement and is the complete and exclusive statement thereof.{'\n'}{'\n'}
                                (iv) This Agreement can only be modified by a written amendment executed by the Parties.{'\n'}{'\n'}
                                (v)	Waiver of any breach of this Agreement must be in writing to be effective and shall not be a waiver of any subsequent breach, nor shall it be a waiver of the underlying obligation.{'\n'}{'\n'}
                                (vi) If any term, part, paragraph, clause or section of this Agreement is held by a court of competent jurisdiction to be invalid or unenforceable, then this Agreement, including all of the remaining terms, parts, paragraphs, clauses or sections, will remain valid and in full force and effect as if such invalid or unenforceable term had never been included.{'\n'}{'\n'}
                                (vii) The obligations contained in this Agreement shall not be affected by bankruptcy, receivership, assignment, attachment or seizure procedures, whether initiated by or against Recipient, nor by the rejection of any agreement between the Parties, by a trustee of Recipient in bankruptcy, or by the Recipient as a debtor-in-possession or the equivalent of any of the foregoing under applicable law.{'\n'}{'\n'}
                                (viii) This Agreement may be assigned or transferred only upon the prior written consent of both Parties, which consent shall not be unreasonably withheld.{'\n'}
                                </Text>
                            </View>
                            <View style={{ flex: 0.1 }} />
                            <View style={{ flex: 1 }}>
                                <Text style={styles.agreeBoldText}>{'\n'}2.Disclosure of Confidential Information{'\n'}</Text>
                                <Text style={styles.agreeText} >The Discloser may deem it necessary, from time to time, to disclose or make available to the Recipient, Confidential Information in connection with the Authorized Purpose. It shall then become the responsibility of the Recipient to:{'\n'}</Text>
                                <Text style={styles.agreeText}>(i) Use all Confidential Information received by it solely in connection with the Authorized Purpose and for no other purpose whatsoever, unless otherwise authorized by prior written consent by an authorized representative of the Discloser. The Recipient shall strictly limit access to any Confidential Information to its employees, independent contractors, and agents (collectively herein referred to as “<Text style={styles.agreeBoldText} >Representatives</Text>”) who are under a contractual obligation to maintain the confidentiality of such information, and who have a need-to-know connection with the Authorized Purpose;{'\n'}{'\n'}
                                (ii) Advise its Representatives of the proprietary nature of the Confidential Information and of the obligations set forth herein this Agreement and require such Representatives to keep the Confidential Information confidential;{'\n'}{'\n'}
                                (iii) Keep all Confidential Information strictly confidential by way of exercising a reasonable degree of care, but not less than the degree of care that the Recipient would exercise in safeguarding their own confidential information and establish satisfactory security measures to safeguard the Confidential Information from unauthorized access or use;{'\n'}{'\n'}
                                (iv) Not disclose any Confidential Information received to any third parties (whether suchinformation is disclosed directly by the Discloser or on the Discloser’s behalf) unless otherwise provided for herein this Agreement or expressly agreed by the Discloser in writing; and{'\n'}{'\n'}
                                (v) Not copy, alter, modify, reduce to writing or otherwise record the Confidential Information except as specifically permitted by the Discloser in writing (and any such copies, reductions to writingand records shall be the property of the Discloser).{'\n'}{'\n'}
                                (vi) Therefore, the Recipient shall be responsible for any breach of this Agreement by any of its Representatives.
                                </Text>

                                <Text style={styles.agreeBoldText}>{'\n'}4.Terms{'\n'}</Text>
                                <Text style={styles.agreeText}>The obligations of the Parties here in shall be effective during discussions or conversations for the Authorized Purpose and for a period of three (3) years from the latter of the date of last disclosure of any Confidential Information to the Recipient pursuant to this Agreement or th edate of termination of said discussions or conversations.Notwithstanding the foregoing, the Recipient shall maintain the secrecy and confidentiality of any Confidential Information indefinitely. However, if any Confidential Information so disclosed is or becomes public knowledge without breach by the Recipient or its Representatives of its obligations under this Agreement, the Recipient shall be relieved of its confidentiality obligations with respect to that specific Confidential Information.</Text>

                                <Text style={styles.agreeBoldText}>{'\n'}6.Rights and Remedies{'\n'}</Text>
                                <Text style={styles.agreeText}>
                                    (i) The Recipient shall immediately notify the Discloser upon discovery of any unauthorized use or disclosure of Confidential Information or any breach of this Agreement by Recipient or its Representatives and will cooperate with the Discloser in every reasonable way to help it regain possession of the Confidential Information and prevent its further unauthorized use.{'\n'}{'\n'}
                                    (ii) The parties agree that money damages would not be a sufficient remedy for breach of the confidentiality and other obligations of this Agreement. Accordingly, the Recipient agrees that in an action for equitable remedies under this Agreement, the Discloser shall not be required to prove the inadequacy or insufficiency of monetary damages.  Recipient further agrees to waive any requirement for a bond or other security in connection with any such injunctive or other equitable relief.{'\n'}{'\n'}
                                    (iii) If either party employs an attorney to enforce any rights arising out of or relating to this Agreement, the prevailing party shall be entitled to recover reasonable costs of litigation, including, but not limited to, attorneys’ fees.
                                </Text>

                                <Text style={styles.agreeBoldText}>{'\n'}8.Non-Circumvention{'\n'}</Text>
                                <Text style={styles.agreeText} >The Recipient shall not at any time prior to 3 (three) years, without the prior written consent of the Discloser, which consent the Discloser may withhold at its sole discretion:{'\n'}</Text>
                                <Text style={styles.agreeText}>
                                    (i)	Attempt in any manner to deal directly or indirectly with any contact persons or other individuals or companies related to the Discloser including by having any part of or deriving any benefit from the Discloser or any aspect thereof;{'\n'}{'\n'}
                                (ii) By-pass, compete, avoid, circumvent, or attempt to circumvent the Discloser relative to the potential business transaction including by utilizing any of the Confidential Information or by otherwise exploiting or deriving any benefit from the Confidential Information.
                                </Text>

                                <Text style={styles.agreeBoldText}>{'\n'}10.Indemnity{'\n'}</Text>
                                <Text style={styles.agreeText}>The Recipient hereby agrees to defend, indemnify, and hold harmless the Discloser and its officers, directors, agents, affiliates, distributors, representatives, and employees from any and all third party claims, demands, liabilities, costs and expenses (including reasonable attorney's fees, costs and expenses) resulting from the Recipient’s breach of any term of this Agreement.{'\n'}</Text>
                            </View>
                        </View>
                        <Text style={styles.agreeText}>{'\n'}IN WITNESS WHEREOF, the parties acknowledge that they have read and understood this Agreement and voluntarily accept the duties and obligations set forth herein as of the aforementioned effective date.{'\n'}</Text>

                    </ScrollView>
                    <View style={{
                        flexDirection: 'row',
                        paddingHorizontal: width * .01,
                        marginBottom: height * .01,
                        // justifyContent: 'space-between'
                    }} >
                        {/* <Checkbox value='agree' checked={this.state.isAgreed} onCheck={this.checker} label='I have Agreed the terms' /> */}
                        <TouchableOpacity
                            onPress={() => this._handleDecline()}
                            style={{
                                flex: 1,
                                backgroundColor: '#136AC7',
                                borderRadius: width * .005,
                                // marginBottom: width * .01,
                                padding: width * .008,
                            }}>
                            <Text style={{
                                fontSize: height * .024,
                                color: '#FFF',
                                alignSelf: 'center'
                            }}>Decline</Text>
                        </TouchableOpacity>
                        <View style={{ flex: 0.1 }} />
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Home')}
                            style={{
                                flex: 1,
                                backgroundColor: '#136AC7',
                                borderRadius: width * .005,
                                // marginBottom: width * .01,
                                padding: width * .008,
                            }}>
                            <Text style={{
                                fontSize: height * .024,
                                color: '#FFF',
                                alignSelf: 'center'
                            }}>Accept</Text></TouchableOpacity>
                    </View>
                </View>

            </View >
        );
    }
}

export default function (props) {
    const navigation = useNavigation();
    return <App {...props} navigation={navigation} />
}