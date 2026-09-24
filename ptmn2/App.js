import React, { useState } from 'react';

import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  Button,
  TouchableOpacity,
  Pressable,
  Switch,
  Modal,
  ActivityIndicator,
  StatusBar,
  SafeAreaView,
  StyleSheet,
  FlatList,
  SectionList,
  Alert,
  Platform,
  Linking,
} from 'react-native';

// =====================================
// DATA PROFIL
// =====================================

const PROFILE = {
  name: 'Luthfi Baihaqi',
  title: 'Programmer',
  email: 'lutpibaihaqi23@gmail.com',
  phone: '+62 857-7062-1314',
  location: 'Indonesia',
  bio: 'Pemula yang sedang belajar',
  avatar: require('./assets/lutpiuin.jpeg'),
};

// =====================================
// WARNA
// =====================================

const COLORS = {
  bg: '#0f0f1a',
  card: '#1a1a2e',
  cardBorder: '#2d2d44',
  accent: '#7c3aed',
  accentLight: '#a78bfa',
  accentGold: '#f59e0b',
  text: '#f0f0f0',
  textMuted: '#9ca3af',
  textDim: '#6b7280',
  success: '#4ade80',
  white: '#ffffff',
};

// =====================================
// SKILL
// =====================================

const SKILLS = [
  {
    id: '1',
    name: 'React Native',
    level: 90,
    color: '#61DAFB',
  },
  {
    id: '2',
    name: 'Flutter',
    level: 75,
    color: '#02569B',
  },
  {
    id: '3',
    name: 'JavaScript',
    level: 88,
    color: '#F7DF1E',
  },
  {
    id: '4',
    name: 'TypeScript',
    level: 80,
    color: '#3178C6',
  },
  {
    id: '5',
    name: 'Node JS',
    level: 70,
    color: '#339933',
  },
  {
    id: '6',
    name: 'Firebase',
    level: 82,
    color: '#FFCA28',
  },
  {
    id: '7',
    name: 'Tailwind CSS',
    level: 95,
    color: '#ff1990',
  },
];

// =====================================
// PENGALAMAN & PENDIDIKAN
// =====================================

const SECTIONS = [
  {
    title: '💼 Pengalaman',
    data: [
      {
        id: 'e1',
        role: 'Mobile Developer',
        company: 'Project Pribadi',
        period: '2024 - Sekarang',
        desc: 'Mempelajari dan mengembangkan aplikasi mobile menggunakan React Native serta berbagai teknologi pendukung.',
      },
      {
        id: 'e2',
        role: 'Programmer Pemula',
        company: 'Pembelajaran Informatika',
        period: '2024 - Sekarang',
        desc: 'Mempelajari pemrograman mobile, web development, database, dan teknologi perangkat lunak.',
      },
    ],
  },
  {
    title: '🎓 Pendidikan',
    data: [
      {
        id: 'd1',
        role: 'S1 Informatika',
        company:
          'Universitas Islam Negeri Siber Syekh Nurjati Cirebon',
        period: '2024 - Sekarang',
        desc: 'Mempelajari bidang informatika, pemrograman, pengembangan aplikasi, dan teknologi informasi.',
      },
    ],
  },
];

// =====================================
// SOCIAL MEDIA
// =====================================

const SOCIAL = [
  {
    id: 's1',
    name: 'GitHub',
    icon: '👨‍🎓',
    url: 'https://github.com/Luthfi-collab/',
  },
  {
    id: 's2',
    name: 'LinkedIn',
    icon: '💼',
    url: 'https://www.linkedin.com/in/luthfi-baihaqi-b55b20439/',
  },
  {
    id: 's3',
    name: 'Youtube',
    icon: '🎥',
    url: 'https://youtube.com/@luthfibaihaqi-q6u?si=Ad48dbi8MAbwDymN/',
  },
];

// =====================================
// CORE COMPONENTS
// =====================================

const CORE_COMPONENTS = [
  {
    id: '1',
    name: 'View',
    desc: 'Container layout utama',
  },
  {
    id: '2',
    name: 'Text',
    desc: 'Menampilkan teks',
  },
  {
    id: '3',
    name: 'Image',
    desc: 'Menampilkan gambar',
  },
  {
    id: '4',
    name: 'ScrollView',
    desc: 'Membuat halaman dapat di-scroll',
  },
  {
    id: '5',
    name: 'FlatList',
    desc: 'Menampilkan daftar skill',
  },
  {
    id: '6',
    name: 'SectionList',
    desc: 'Menampilkan data berdasarkan kategori',
  },
  {
    id: '7',
    name: 'TextInput',
    desc: 'Input nama dan pesan',
  },
  {
    id: '8',
    name: 'Button',
    desc: 'Tombol kirim',
  },
  {
    id: '9',
    name: 'TouchableOpacity',
    desc: 'Tombol interaktif',
  },
  {
    id: '10',
    name: 'Pressable',
    desc: 'Tombol download',
  },
  {
    id: '11',
    name: 'Switch',
    desc: 'Toggle Open to Work',
  },
  {
    id: '12',
    name: 'Modal',
    desc: 'Popup detail',
  },
  {
    id: '13',
    name: 'ActivityIndicator',
    desc: 'Indikator loading',
  },
  {
    id: '14',
    name: 'StatusBar',
    desc: 'Mengatur status bar',
  },
  {
    id: '15',
    name: 'SafeAreaView',
    desc: 'Area aman perangkat',
  },
  {
    id: '16',
    name: 'StyleSheet',
    desc: 'Mengatur tampilan aplikasi',
  },
];

// =====================================
// SKILL CARD
// =====================================

const SkillCard = ({ item }) => (
  <View style={styles.skillCard}>
    <View style={styles.skillHeader}>
      <Text style={styles.skillName}>{item.name}</Text>

      <Text style={styles.skillPercent}>
        {item.level}%
      </Text>
    </View>

    <View style={styles.progressBg}>
      <View
        style={[
          styles.progressFill,
          {
            width: `${item.level}%`,
            backgroundColor: item.color,
          },
        ]}
      />
    </View>
  </View>
);

// =====================================
// TIMELINE CARD
// =====================================

const TimelineCard = ({ item, onPress }) => (
  <TouchableOpacity
    style={styles.timelineCard}
    onPress={() => onPress(item)}
    activeOpacity={0.75}
  >
    <View style={styles.timelineDot} />

    <View style={styles.timelineContent}>
      <Text style={styles.timelineRole}>
        {item.role}
      </Text>

      <Text style={styles.timelineCompany}>
        {item.company}
      </Text>

      <Text style={styles.timelinePeriod}>
        {item.period}
      </Text>

      <Text style={styles.timelineHint}>
        Ketuk untuk detail
      </Text>
    </View>
  </TouchableOpacity>
);

// =====================================
// APP
// =====================================

export default function App() {
  const [openToWork, setOpenToWork] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const [senderName, setSenderName] = useState('');
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);
  const [pressing, setPressing] = useState(false);

  const handleCardPress = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const handleSend = () => {
    if (!senderName.trim() || !message.trim()) {
      Alert.alert(
        'Peringatan',
        'Nama dan pesan tidak boleh kosong!'
      );
      return;
    }

    setSending(true);

    setTimeout(() => {
      setSending(false);

      Alert.alert(
        'Berhasil',
        `Pesan dari ${senderName} telah terkirim!`
      );

      setSenderName('');
      setMessage('');
    }, 1500);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        backgroundColor={COLORS.bg}
        barStyle="light-content"
      />

      {/* HEADER */}

      <View style={styles.headerBar}>
        <Text style={styles.headerTitle}>
          📄 Curriculum Vitae
        </Text>

        <View style={styles.switchRow}>
          <Text style={styles.switchLabel}>
            {openToWork ? '🟢 Open' : '🔴 Busy'}
          </Text>

          <Switch
            value={openToWork}
            onValueChange={setOpenToWork}
            trackColor={{
              false: COLORS.textDim,
              true: COLORS.success,
            }}
            thumbColor={
              openToWork ? COLORS.white : '#aaa'
            }
          />
        </View>
      </View>

      <ScrollView
        style={styles.scroll}
        showsVerticalScrollIndicator={false}
      >

        {/* PROFIL */}

        <View style={styles.profileSection}>

          <Image
  source={PROFILE.avatar}
  style={styles.avatar}
/>

          {openToWork && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>
                ✅ Open to Work
              </Text>
            </View>
          )}

          <Text style={styles.profileName}>
            {PROFILE.name}
          </Text>

          <Text style={styles.profileTitle}>
            {PROFILE.title}
          </Text>

          <Text style={styles.profileBio}>
            {PROFILE.bio}
          </Text>

          <View style={styles.contactRow}>
            <Text style={styles.contactItem}>
              📧 {PROFILE.email}
            </Text>

            <Text style={styles.contactItem}>
              📍 {PROFILE.location}
            </Text>

            <Text style={styles.contactItem}>
              📱 {PROFILE.phone}
            </Text>
          </View>

          {/* SOCIAL */}

          <View style={styles.socialRow}>
  {SOCIAL.map((item) => (
    <TouchableOpacity
      key={item.id}
      style={styles.socialBtn}
      onPress={() => Linking.openURL(item.url)}
      activeOpacity={0.7}
    >
      <Text style={styles.socialIcon}>
        {item.icon}
      </Text>

      <Text style={styles.socialLabel}>
        {item.name}
      </Text>
    </TouchableOpacity>
  ))}
</View>

          {/* DOWNLOAD */}

          <Pressable
            style={({ pressed }) => [
              styles.downloadBtn,
              pressed && styles.downloadBtnPressed,
            ]}
            onPressIn={() => setPressing(true)}
            onPressOut={() => setPressing(false)}
            onPress={() =>
              Alert.alert(
                'Download',
                'Fitur download CV siap dikembangkan.'
              )
            }
          >
            <Text style={styles.downloadBtnText}>
              {pressing
                ? '⌛ Memproses...'
                : '⬇️ Download CV'}
            </Text>
          </Pressable>
        </View>

        {/* SKILLS */}

        <View style={styles.sectionBox}>
          <Text style={styles.sectionTitle}>
            🛠 Keahlian
          </Text>

          <Text style={styles.sectionSubtitle}>
            FlatList digunakan untuk menampilkan daftar skill.
          </Text>

          <FlatList
            data={SKILLS}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <SkillCard item={item} />
            )}
            scrollEnabled={false}
            ItemSeparatorComponent={() => (
              <View style={{ height: 8 }} />
            )}
          />
        </View>

        {/* RIWAYAT */}

        <View style={styles.sectionBox}>
          <Text style={styles.sectionTitle}>
            📋 Riwayat
          </Text>

          <Text style={styles.sectionSubtitle}>
            SectionList digunakan untuk mengelompokkan
            pengalaman dan pendidikan.
          </Text>

          <SectionList
            sections={SECTIONS}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TimelineCard
                item={item}
                onPress={handleCardPress}
              />
            )}
            renderSectionHeader={({ section }) => (
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionHeaderText}>
                  {section.title}
                </Text>
              </View>
            )}
            scrollEnabled={false}
            ItemSeparatorComponent={() => (
              <View style={{ height: 10 }} />
            )}
          />
        </View>

        {/* CORE COMPONENTS */}

        <View style={styles.sectionBox}>
          <Text style={styles.sectionTitle}>
            🧩 16 Core Components
          </Text>

          <Text style={styles.sectionSubtitle}>
            Komponen React Native yang digunakan
            dalam aplikasi CV.
          </Text>

          <View>
            {CORE_COMPONENTS.map((item, index) => (
              <View
                key={item.id}
                style={styles.coreItem}
              >
                <View style={styles.coreNumber}>
                  <Text style={styles.coreNumberText}>
                    {index + 1}
                  </Text>
                </View>

                <View style={styles.coreContent}>
                  <Text style={styles.coreName}>
                    {item.name}
                  </Text>

                  <Text style={styles.coreDesc}>
                    {item.desc}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* FORM */}

        <View style={styles.sectionBox}>
          <Text style={styles.sectionTitle}>
            ✉️ Hubungi Saya
          </Text>

          <Text style={styles.sectionSubtitle}>
            TextInput, Button, dan ActivityIndicator
          </Text>

          <TextInput
            style={styles.textInput}
            placeholder="Nama Anda"
            placeholderTextColor={COLORS.textDim}
            value={senderName}
            onChangeText={setSenderName}
            editable={!sending}
          />

          <TextInput
            style={[
              styles.textInput,
              styles.textArea,
            ]}
            placeholder="Tulis pesan Anda..."
            placeholderTextColor={COLORS.textDim}
            value={message}
            onChangeText={setMessage}
            multiline
            numberOfLines={4}
            editable={!sending}
          />

          {sending ? (
            <View style={styles.loadingRow}>
              <ActivityIndicator
                size="large"
                color={COLORS.accent}
              />

              <Text style={styles.loadingText}>
                Mengirim pesan...
              </Text>
            </View>
          ) : (
            <Button
              title="📩 Kirim Pesan"
              color={COLORS.accent}
              onPress={handleSend}
            />
          )}
        </View>

        <View style={{ height: 40 }} />
      </ScrollView>

      {/* MODAL */}

      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent
        onRequestClose={() =>
          setModalVisible(false)
        }
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>

            {selectedItem && (
              <>
                <Text style={styles.modalTitle}>
                  {selectedItem.role}
                </Text>

                <Text style={styles.modalCompany}>
                  {selectedItem.company}
                </Text>

                <Text style={styles.modalPeriod}>
                  📅 {selectedItem.period}
                </Text>

                <View style={styles.modalDivider} />

                <Text style={styles.modalDesc}>
                  {selectedItem.desc}
                </Text>
              </>
            )}

            <TouchableOpacity
              style={styles.modalCloseBtn}
              onPress={() =>
                setModalVisible(false)
              }
            >
              <Text style={styles.modalCloseBtnText}>
                ✕ Tutup
              </Text>
            </TouchableOpacity>

          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

// =====================================
// STYLE
// =====================================

const styles = StyleSheet.create({

  safeArea: {
    flex: 1,
    backgroundColor: COLORS.bg,
  },

  scroll: {
    flex: 1,
  },

  headerBar: {
    backgroundColor: COLORS.card,
    paddingHorizontal: 20,
    paddingVertical: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.cardBorder,
  },

  headerTitle: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: '700',
  },

  switchRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  switchLabel: {
    color: COLORS.textMuted,
    fontSize: 12,
    fontWeight: '600',
    marginRight: 8,
  },

  profileSection: {
    alignItems: 'center',
    paddingVertical: 32,
    paddingHorizontal: 20,
    backgroundColor: COLORS.card,
    marginBottom: 16,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    borderBottomWidth: 2,
    borderColor: COLORS.accent,
  },

 avatar: {
  width: 110,
  height: 110,
  borderRadius: 55,
  marginBottom: 12,
  borderWidth: 3,
  borderColor: COLORS.accent,
},

  avatarText: {
    color: COLORS.white,
    fontSize: 36,
    fontWeight: '800',
  },

  badge: {
    backgroundColor: '#052e16',
    borderWidth: 1,
    borderColor: COLORS.success,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
    marginBottom: 12,
  },

  badgeText: {
    color: COLORS.success,
    fontSize: 12,
    fontWeight: '700',
  },

  profileName: {
    color: COLORS.white,
    fontSize: 26,
    fontWeight: '800',
    textAlign: 'center',
  },

  profileTitle: {
    color: COLORS.accentLight,
    fontSize: 14,
    fontWeight: '600',
    marginTop: 4,
    marginBottom: 14,
  },

  profileBio: {
    color: COLORS.textMuted,
    fontSize: 13,
    textAlign: 'center',
    marginBottom: 16,
  },

  contactRow: {
    alignItems: 'center',
  },

  contactItem: {
    color: COLORS.textMuted,
    fontSize: 12,
    marginBottom: 5,
    textAlign: 'center',
  },

  socialRow: {
    flexDirection: 'row',
    marginTop: 16,
    marginBottom: 20,
  },

  socialBtn: {
    alignItems: 'center',
    backgroundColor: '#16213e',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.cardBorder,
    marginHorizontal: 5,
  },

  socialIcon: {
    fontSize: 20,
    marginBottom: 4,
  },

  socialLabel: {
    color: COLORS.accentLight,
    fontSize: 11,
    fontWeight: '600',
  },

  downloadBtn: {
    backgroundColor: COLORS.accent,
    paddingVertical: 14,
    paddingHorizontal: 36,
    borderRadius: 50,
  },

  downloadBtnPressed: {
    backgroundColor: '#5b21b6',
  },

  downloadBtnText: {
    color: COLORS.white,
    fontWeight: '700',
    fontSize: 14,
  },

  sectionBox: {
    marginHorizontal: 16,
    marginBottom: 16,
    backgroundColor: COLORS.card,
    borderRadius: 16,
    padding: 18,
    borderWidth: 1,
    borderColor: COLORS.cardBorder,
  },

  sectionTitle: {
    color: COLORS.white,
    fontSize: 17,
    fontWeight: '700',
    marginBottom: 4,
  },

  sectionSubtitle: {
    color: COLORS.textDim,
    fontSize: 11,
    fontStyle: 'italic',
    marginBottom: 16,
  },

  skillCard: {
    backgroundColor: '#16213e',
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.cardBorder,
  },

  skillHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },

  skillName: {
    color: COLORS.text,
    fontWeight: '600',
    fontSize: 13,
  },

  skillPercent: {
    color: COLORS.accentLight,
    fontWeight: '700',
    fontSize: 13,
  },

  progressBg: {
    height: 6,
    backgroundColor: '#0f172a',
    borderRadius: 4,
    overflow: 'hidden',
  },

  progressFill: {
    height: 6,
    borderRadius: 4,
  },

  sectionHeader: {
    backgroundColor: '#0f172a',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginBottom: 8,
    borderLeftWidth: 3,
    borderLeftColor: COLORS.accent,
  },

  sectionHeaderText: {
    color: COLORS.accentLight,
    fontWeight: '700',
    fontSize: 13,
  },

  timelineCard: {
    flexDirection: 'row',
    backgroundColor: '#16213e',
    borderRadius: 12,
    padding: 14,
    borderWidth: 1,
    borderColor: COLORS.cardBorder,
  },

  timelineDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: COLORS.accent,
    marginTop: 4,
    marginRight: 12,
  },

  timelineContent: {
    flex: 1,
  },

  timelineRole: {
    color: COLORS.white,
    fontWeight: '700',
    fontSize: 14,
    marginBottom: 2,
  },

  timelineCompany: {
    color: COLORS.accentLight,
    fontSize: 13,
    marginBottom: 2,
  },

  timelinePeriod: {
    color: COLORS.textMuted,
    fontSize: 11,
    marginBottom: 6,
  },

  timelineHint: {
    color: COLORS.accentGold,
    fontSize: 11,
    fontStyle: 'italic',
  },

  coreItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#16213e',
    borderRadius: 10,
    padding: 10,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: COLORS.cardBorder,
  },

  coreNumber: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: COLORS.accent,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },

  coreNumberText: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: '800',
  },

  coreContent: {
    flex: 1,
  },

  coreName: {
    color: COLORS.white,
    fontSize: 13,
    fontWeight: '700',
    marginBottom: 2,
  },

  coreDesc: {
    color: COLORS.textMuted,
    fontSize: 11,
    lineHeight: 16,
  },

  textInput: {
    backgroundColor: '#0f172a',
    color: COLORS.text,
    borderWidth: 1,
    borderColor: COLORS.cardBorder,
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: Platform.OS === 'ios' ? 14 : 10,
    fontSize: 14,
    marginBottom: 12,
  },

  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },

  loadingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },

  loadingText: {
    color: COLORS.accentLight,
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 12,
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.75)',
    justifyContent: 'flex-end',
  },

  modalBox: {
    backgroundColor: '#1e1b4b',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 28,
    borderTopWidth: 3,
    borderColor: COLORS.accent,
  },

  modalTitle: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: '800',
    marginBottom: 4,
  },

  modalCompany: {
    color: COLORS.accentLight,
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 4,
  },

  modalPeriod: {
    color: COLORS.textMuted,
    fontSize: 13,
    marginBottom: 16,
  },

  modalDivider: {
    height: 1,
    backgroundColor: COLORS.cardBorder,
    marginBottom: 16,
  },

  modalDesc: {
    color: COLORS.text,
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 24,
  },

  modalCloseBtn: {
    backgroundColor: COLORS.accent,
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
  },

  modalCloseBtnText: {
    color: COLORS.white,
    fontWeight: '700',
    fontSize: 14,
  },
});