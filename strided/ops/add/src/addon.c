/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

/* NOTE: Do not edit this file directly. This file is auto-generated. See ./src/addon.c.txt. */

#include "stdlib/math/base/ops/add.h"
#include "stdlib/math/base/ops/addf.h"
#include "stdlib/complex/float64/base/add.h"
#include "stdlib/complex/float32/base/add.h"
#include "stdlib/strided/dtypes.h"
#include "stdlib/strided/base/function_object.h"
#include "stdlib/strided/base/binary.h"
#include "stdlib/strided/napi/binary.h"
#include <stdint.h>

/**
* Adds two numbers.
*
* @param x   input value
* @param y   input value
* @return    result
*/
static uint32_t addu( const uint32_t x, const uint32_t y ) {
	return x + y;
}

/**
* Adds two numbers.
*
* @param x   input value
* @param y   input value
* @return    result
*/
static int32_t addi( const int32_t x, const int32_t y ) {
	return x + y;
}

/**
* Adds two numbers.
*
* @param x   input value
* @param y   input value
* @return    result
*/
static uint16_t addt( const uint16_t x, const uint16_t y ) {
	return x + y;
}

/**
* Adds two numbers.
*
* @param x   input value
* @param y   input value
* @return    result
*/
static int16_t addk( const int16_t x, const int16_t y ) {
	return x + y;
}

/**
* Adds two numbers.
*
* @param x   input value
* @param y   input value
* @return    result
*/
static uint8_t addb( const uint8_t x, const uint8_t y ) {
	return x + y;
}

/**
* Adds two numbers.
*
* @param x   input value
* @param y   input value
* @return    result
*/
static int8_t adds( const int8_t x, const int8_t y ) {
	return x + y;
}

// Define an interface name:
static const char name[] = "stdlib_strided_add";

// Define a list of strided array functions:
static StridedArrayFcn functions[] = {
	stdlib_strided_cc_c,
	stdlib_strided_cc_z_as_zz_z,
	stdlib_strided_cz_z_as_zz_z,
	stdlib_strided_cf_c_as_cc_c,
	stdlib_strided_cf_z_as_zz_z,
	stdlib_strided_cd_z_as_zz_z,
	stdlib_strided_ck_c_as_cc_c,
	stdlib_strided_ck_z_as_zz_z,
	stdlib_strided_ci_z_as_zz_z,
	stdlib_strided_cs_c_as_cc_c,
	stdlib_strided_cs_z_as_zz_z,
	stdlib_strided_ct_c_as_cc_c,
	stdlib_strided_ct_z_as_zz_z,
	stdlib_strided_cu_z_as_zz_z,
	stdlib_strided_cb_c_as_cc_c,
	stdlib_strided_cb_z_as_zz_z,
	stdlib_strided_zc_z_as_zz_z,
	stdlib_strided_zz_z,
	stdlib_strided_zf_z_as_zz_z,
	stdlib_strided_zd_z_as_zz_z,
	stdlib_strided_zk_z_as_zz_z,
	stdlib_strided_zi_z_as_zz_z,
	stdlib_strided_zs_z_as_zz_z,
	stdlib_strided_zt_z_as_zz_z,
	stdlib_strided_zu_z_as_zz_z,
	stdlib_strided_zb_z_as_zz_z,
	stdlib_strided_fc_c_as_cc_c,
	stdlib_strided_fc_z_as_zz_z,
	stdlib_strided_fz_z_as_zz_z,
	stdlib_strided_ff_f,
	stdlib_strided_ff_z_as_zz_z,
	stdlib_strided_ff_c_as_cc_c,
	stdlib_strided_ff_d_as_dd_d,
	stdlib_strided_fd_d_as_dd_d,
	stdlib_strided_fd_z_as_zz_z,
	stdlib_strided_fk_f_as_ff_f,
	stdlib_strided_fk_z_as_zz_z,
	stdlib_strided_fk_c_as_cc_c,
	stdlib_strided_fk_d_as_dd_d,
	stdlib_strided_fi_d_as_dd_d,
	stdlib_strided_fi_z_as_zz_z,
	stdlib_strided_fs_f_as_ff_f,
	stdlib_strided_fs_z_as_zz_z,
	stdlib_strided_fs_c_as_cc_c,
	stdlib_strided_fs_d_as_dd_d,
	stdlib_strided_ft_f_as_ff_f,
	stdlib_strided_ft_z_as_zz_z,
	stdlib_strided_ft_c_as_cc_c,
	stdlib_strided_ft_d_as_dd_d,
	stdlib_strided_fu_d_as_dd_d,
	stdlib_strided_fu_z_as_zz_z,
	stdlib_strided_fb_f_as_ff_f,
	stdlib_strided_fb_z_as_zz_z,
	stdlib_strided_fb_c_as_cc_c,
	stdlib_strided_fb_d_as_dd_d,
	stdlib_strided_dc_z_as_zz_z,
	stdlib_strided_dz_z_as_zz_z,
	stdlib_strided_df_d_as_dd_d,
	stdlib_strided_df_z_as_zz_z,
	stdlib_strided_dd_d,
	stdlib_strided_dd_z_as_zz_z,
	stdlib_strided_dk_d_as_dd_d,
	stdlib_strided_dk_z_as_zz_z,
	stdlib_strided_di_d_as_dd_d,
	stdlib_strided_di_z_as_zz_z,
	stdlib_strided_ds_d_as_dd_d,
	stdlib_strided_ds_z_as_zz_z,
	stdlib_strided_dt_d_as_dd_d,
	stdlib_strided_dt_z_as_zz_z,
	stdlib_strided_du_d_as_dd_d,
	stdlib_strided_du_z_as_zz_z,
	stdlib_strided_db_d_as_dd_d,
	stdlib_strided_db_z_as_zz_z,
	stdlib_strided_kc_c_as_cc_c,
	stdlib_strided_kc_z_as_zz_z,
	stdlib_strided_kz_z_as_zz_z,
	stdlib_strided_kf_f_as_ff_f,
	stdlib_strided_kf_z_as_zz_z,
	stdlib_strided_kf_c_as_cc_c,
	stdlib_strided_kf_d_as_dd_d,
	stdlib_strided_kd_d_as_dd_d,
	stdlib_strided_kd_z_as_zz_z,
	stdlib_strided_kk_k,
	stdlib_strided_kk_z_as_zz_z,
	stdlib_strided_kk_c_as_cc_c,
	stdlib_strided_kk_f_as_ff_f,
	stdlib_strided_kk_d_as_dd_d,
	stdlib_strided_kk_i_as_ii_i,
	stdlib_strided_ki_i_as_ii_i,
	stdlib_strided_ki_z_as_zz_z,
	stdlib_strided_ki_d_as_dd_d,
	stdlib_strided_ks_k_as_kk_k,
	stdlib_strided_ks_z_as_zz_z,
	stdlib_strided_ks_c_as_cc_c,
	stdlib_strided_ks_f_as_ff_f,
	stdlib_strided_ks_d_as_dd_d,
	stdlib_strided_ks_i_as_ii_i,
	stdlib_strided_kt_i_as_ii_i,
	stdlib_strided_kt_z_as_zz_z,
	stdlib_strided_kt_d_as_dd_d,
	stdlib_strided_ku_d_as_dd_d,
	stdlib_strided_ku_z_as_zz_z,
	stdlib_strided_kb_k_as_kk_k,
	stdlib_strided_kb_z_as_zz_z,
	stdlib_strided_kb_c_as_cc_c,
	stdlib_strided_kb_f_as_ff_f,
	stdlib_strided_kb_d_as_dd_d,
	stdlib_strided_kb_i_as_ii_i,
	stdlib_strided_ic_z_as_zz_z,
	stdlib_strided_iz_z_as_zz_z,
	stdlib_strided_if_d_as_dd_d,
	stdlib_strided_if_z_as_zz_z,
	stdlib_strided_id_d_as_dd_d,
	stdlib_strided_id_z_as_zz_z,
	stdlib_strided_ik_i_as_ii_i,
	stdlib_strided_ik_z_as_zz_z,
	stdlib_strided_ik_d_as_dd_d,
	stdlib_strided_ii_i,
	stdlib_strided_ii_z_as_zz_z,
	stdlib_strided_ii_d_as_dd_d,
	stdlib_strided_is_i_as_ii_i,
	stdlib_strided_is_z_as_zz_z,
	stdlib_strided_is_d_as_dd_d,
	stdlib_strided_it_i_as_ii_i,
	stdlib_strided_it_z_as_zz_z,
	stdlib_strided_it_d_as_dd_d,
	stdlib_strided_iu_d_as_dd_d,
	stdlib_strided_iu_z_as_zz_z,
	stdlib_strided_ib_i_as_ii_i,
	stdlib_strided_ib_z_as_zz_z,
	stdlib_strided_ib_d_as_dd_d,
	stdlib_strided_sc_c_as_cc_c,
	stdlib_strided_sc_z_as_zz_z,
	stdlib_strided_sz_z_as_zz_z,
	stdlib_strided_sf_f_as_ff_f,
	stdlib_strided_sf_z_as_zz_z,
	stdlib_strided_sf_c_as_cc_c,
	stdlib_strided_sf_d_as_dd_d,
	stdlib_strided_sd_d_as_dd_d,
	stdlib_strided_sd_z_as_zz_z,
	stdlib_strided_sk_k_as_kk_k,
	stdlib_strided_sk_z_as_zz_z,
	stdlib_strided_sk_c_as_cc_c,
	stdlib_strided_sk_f_as_ff_f,
	stdlib_strided_sk_d_as_dd_d,
	stdlib_strided_sk_i_as_ii_i,
	stdlib_strided_si_i_as_ii_i,
	stdlib_strided_si_z_as_zz_z,
	stdlib_strided_si_d_as_dd_d,
	stdlib_strided_ss_s,
	stdlib_strided_ss_z_as_zz_z,
	stdlib_strided_ss_c_as_cc_c,
	stdlib_strided_ss_f_as_ff_f,
	stdlib_strided_ss_d_as_dd_d,
	stdlib_strided_ss_k_as_kk_k,
	stdlib_strided_ss_i_as_ii_i,
	stdlib_strided_st_i_as_ii_i,
	stdlib_strided_st_z_as_zz_z,
	stdlib_strided_st_d_as_dd_d,
	stdlib_strided_su_d_as_dd_d,
	stdlib_strided_su_z_as_zz_z,
	stdlib_strided_sb_k_as_kk_k,
	stdlib_strided_sb_z_as_zz_z,
	stdlib_strided_sb_c_as_cc_c,
	stdlib_strided_sb_f_as_ff_f,
	stdlib_strided_sb_d_as_dd_d,
	stdlib_strided_sb_i_as_ii_i,
	stdlib_strided_tc_c_as_cc_c,
	stdlib_strided_tc_z_as_zz_z,
	stdlib_strided_tz_z_as_zz_z,
	stdlib_strided_tf_f_as_ff_f,
	stdlib_strided_tf_z_as_zz_z,
	stdlib_strided_tf_c_as_cc_c,
	stdlib_strided_tf_d_as_dd_d,
	stdlib_strided_td_d_as_dd_d,
	stdlib_strided_td_z_as_zz_z,
	stdlib_strided_tk_i_as_ii_i,
	stdlib_strided_tk_z_as_zz_z,
	stdlib_strided_tk_d_as_dd_d,
	stdlib_strided_ti_i_as_ii_i,
	stdlib_strided_ti_z_as_zz_z,
	stdlib_strided_ti_d_as_dd_d,
	stdlib_strided_ts_i_as_ii_i,
	stdlib_strided_ts_z_as_zz_z,
	stdlib_strided_ts_d_as_dd_d,
	stdlib_strided_tt_t,
	stdlib_strided_tt_z_as_zz_z,
	stdlib_strided_tt_c_as_cc_c,
	stdlib_strided_tt_f_as_ff_f,
	stdlib_strided_tt_d_as_dd_d,
	stdlib_strided_tt_i_as_ii_i,
	stdlib_strided_tt_u_as_uu_u,
	stdlib_strided_tu_u_as_uu_u,
	stdlib_strided_tu_z_as_zz_z,
	stdlib_strided_tu_d_as_dd_d,
	stdlib_strided_tb_t_as_tt_t,
	stdlib_strided_tb_z_as_zz_z,
	stdlib_strided_tb_c_as_cc_c,
	stdlib_strided_tb_f_as_ff_f,
	stdlib_strided_tb_d_as_dd_d,
	stdlib_strided_tb_i_as_ii_i,
	stdlib_strided_tb_u_as_uu_u,
	stdlib_strided_uc_z_as_zz_z,
	stdlib_strided_uz_z_as_zz_z,
	stdlib_strided_uf_d_as_dd_d,
	stdlib_strided_uf_z_as_zz_z,
	stdlib_strided_ud_d_as_dd_d,
	stdlib_strided_ud_z_as_zz_z,
	stdlib_strided_uk_d_as_dd_d,
	stdlib_strided_uk_z_as_zz_z,
	stdlib_strided_ui_d_as_dd_d,
	stdlib_strided_ui_z_as_zz_z,
	stdlib_strided_us_d_as_dd_d,
	stdlib_strided_us_z_as_zz_z,
	stdlib_strided_ut_u_as_uu_u,
	stdlib_strided_ut_z_as_zz_z,
	stdlib_strided_ut_d_as_dd_d,
	stdlib_strided_uu_u,
	stdlib_strided_uu_z_as_zz_z,
	stdlib_strided_uu_d_as_dd_d,
	stdlib_strided_ub_u_as_uu_u,
	stdlib_strided_ub_z_as_zz_z,
	stdlib_strided_ub_d_as_dd_d,
	stdlib_strided_bc_c_as_cc_c,
	stdlib_strided_bc_z_as_zz_z,
	stdlib_strided_bz_z_as_zz_z,
	stdlib_strided_bf_f_as_ff_f,
	stdlib_strided_bf_z_as_zz_z,
	stdlib_strided_bf_c_as_cc_c,
	stdlib_strided_bf_d_as_dd_d,
	stdlib_strided_bd_d_as_dd_d,
	stdlib_strided_bd_z_as_zz_z,
	stdlib_strided_bk_k_as_kk_k,
	stdlib_strided_bk_z_as_zz_z,
	stdlib_strided_bk_c_as_cc_c,
	stdlib_strided_bk_f_as_ff_f,
	stdlib_strided_bk_d_as_dd_d,
	stdlib_strided_bk_i_as_ii_i,
	stdlib_strided_bi_i_as_ii_i,
	stdlib_strided_bi_z_as_zz_z,
	stdlib_strided_bi_d_as_dd_d,
	stdlib_strided_bs_k_as_kk_k,
	stdlib_strided_bs_z_as_zz_z,
	stdlib_strided_bs_c_as_cc_c,
	stdlib_strided_bs_f_as_ff_f,
	stdlib_strided_bs_d_as_dd_d,
	stdlib_strided_bs_i_as_ii_i,
	stdlib_strided_bt_t_as_tt_t,
	stdlib_strided_bt_z_as_zz_z,
	stdlib_strided_bt_c_as_cc_c,
	stdlib_strided_bt_f_as_ff_f,
	stdlib_strided_bt_d_as_dd_d,
	stdlib_strided_bt_i_as_ii_i,
	stdlib_strided_bt_u_as_uu_u,
	stdlib_strided_bu_u_as_uu_u,
	stdlib_strided_bu_z_as_zz_z,
	stdlib_strided_bu_d_as_dd_d,
	stdlib_strided_bb_b,
	stdlib_strided_bb_z_as_zz_z,
	stdlib_strided_bb_c_as_cc_c,
	stdlib_strided_bb_f_as_ff_f,
	stdlib_strided_bb_d_as_dd_d,
	stdlib_strided_bb_k_as_kk_k,
	stdlib_strided_bb_i_as_ii_i,
	stdlib_strided_bb_t_as_tt_t,
	stdlib_strided_bb_u_as_uu_u
};

// Define the **strided array** argument types for each strided array function:
static int32_t types[] = {
	STDLIB_STRIDED_COMPLEX64, STDLIB_STRIDED_COMPLEX64, STDLIB_STRIDED_COMPLEX64,
	STDLIB_STRIDED_COMPLEX64, STDLIB_STRIDED_COMPLEX64, STDLIB_STRIDED_COMPLEX128,
	STDLIB_STRIDED_COMPLEX64, STDLIB_STRIDED_COMPLEX128, STDLIB_STRIDED_COMPLEX128,
	STDLIB_STRIDED_COMPLEX64, STDLIB_STRIDED_FLOAT32, STDLIB_STRIDED_COMPLEX64,
	STDLIB_STRIDED_COMPLEX64, STDLIB_STRIDED_FLOAT32, STDLIB_STRIDED_COMPLEX128,
	STDLIB_STRIDED_COMPLEX64, STDLIB_STRIDED_FLOAT64, STDLIB_STRIDED_COMPLEX128,
	STDLIB_STRIDED_COMPLEX64, STDLIB_STRIDED_INT16, STDLIB_STRIDED_COMPLEX64,
	STDLIB_STRIDED_COMPLEX64, STDLIB_STRIDED_INT16, STDLIB_STRIDED_COMPLEX128,
	STDLIB_STRIDED_COMPLEX64, STDLIB_STRIDED_INT32, STDLIB_STRIDED_COMPLEX128,
	STDLIB_STRIDED_COMPLEX64, STDLIB_STRIDED_INT8, STDLIB_STRIDED_COMPLEX64,
	STDLIB_STRIDED_COMPLEX64, STDLIB_STRIDED_INT8, STDLIB_STRIDED_COMPLEX128,
	STDLIB_STRIDED_COMPLEX64, STDLIB_STRIDED_UINT16, STDLIB_STRIDED_COMPLEX64,
	STDLIB_STRIDED_COMPLEX64, STDLIB_STRIDED_UINT16, STDLIB_STRIDED_COMPLEX128,
	STDLIB_STRIDED_COMPLEX64, STDLIB_STRIDED_UINT32, STDLIB_STRIDED_COMPLEX128,
	STDLIB_STRIDED_COMPLEX64, STDLIB_STRIDED_UINT8, STDLIB_STRIDED_COMPLEX64,
	STDLIB_STRIDED_COMPLEX64, STDLIB_STRIDED_UINT8, STDLIB_STRIDED_COMPLEX128,
	STDLIB_STRIDED_COMPLEX128, STDLIB_STRIDED_COMPLEX64, STDLIB_STRIDED_COMPLEX128,
	STDLIB_STRIDED_COMPLEX128, STDLIB_STRIDED_COMPLEX128, STDLIB_STRIDED_COMPLEX128,
	STDLIB_STRIDED_COMPLEX128, STDLIB_STRIDED_FLOAT32, STDLIB_STRIDED_COMPLEX128,
	STDLIB_STRIDED_COMPLEX128, STDLIB_STRIDED_FLOAT64, STDLIB_STRIDED_COMPLEX128,
	STDLIB_STRIDED_COMPLEX128, STDLIB_STRIDED_INT16, STDLIB_STRIDED_COMPLEX128,
	STDLIB_STRIDED_COMPLEX128, STDLIB_STRIDED_INT32, STDLIB_STRIDED_COMPLEX128,
	STDLIB_STRIDED_COMPLEX128, STDLIB_STRIDED_INT8, STDLIB_STRIDED_COMPLEX128,
	STDLIB_STRIDED_COMPLEX128, STDLIB_STRIDED_UINT16, STDLIB_STRIDED_COMPLEX128,
	STDLIB_STRIDED_COMPLEX128, STDLIB_STRIDED_UINT32, STDLIB_STRIDED_COMPLEX128,
	STDLIB_STRIDED_COMPLEX128, STDLIB_STRIDED_UINT8, STDLIB_STRIDED_COMPLEX128,
	STDLIB_STRIDED_FLOAT32, STDLIB_STRIDED_COMPLEX64, STDLIB_STRIDED_COMPLEX64,
	STDLIB_STRIDED_FLOAT32, STDLIB_STRIDED_COMPLEX64, STDLIB_STRIDED_COMPLEX128,
	STDLIB_STRIDED_FLOAT32, STDLIB_STRIDED_COMPLEX128, STDLIB_STRIDED_COMPLEX128,
	STDLIB_STRIDED_FLOAT32, STDLIB_STRIDED_FLOAT32, STDLIB_STRIDED_FLOAT32,
	STDLIB_STRIDED_FLOAT32, STDLIB_STRIDED_FLOAT32, STDLIB_STRIDED_COMPLEX128,
	STDLIB_STRIDED_FLOAT32, STDLIB_STRIDED_FLOAT32, STDLIB_STRIDED_COMPLEX64,
	STDLIB_STRIDED_FLOAT32, STDLIB_STRIDED_FLOAT32, STDLIB_STRIDED_FLOAT64,
	STDLIB_STRIDED_FLOAT32, STDLIB_STRIDED_FLOAT64, STDLIB_STRIDED_FLOAT64,
	STDLIB_STRIDED_FLOAT32, STDLIB_STRIDED_FLOAT64, STDLIB_STRIDED_COMPLEX128,
	STDLIB_STRIDED_FLOAT32, STDLIB_STRIDED_INT16, STDLIB_STRIDED_FLOAT32,
	STDLIB_STRIDED_FLOAT32, STDLIB_STRIDED_INT16, STDLIB_STRIDED_COMPLEX128,
	STDLIB_STRIDED_FLOAT32, STDLIB_STRIDED_INT16, STDLIB_STRIDED_COMPLEX64,
	STDLIB_STRIDED_FLOAT32, STDLIB_STRIDED_INT16, STDLIB_STRIDED_FLOAT64,
	STDLIB_STRIDED_FLOAT32, STDLIB_STRIDED_INT32, STDLIB_STRIDED_FLOAT64,
	STDLIB_STRIDED_FLOAT32, STDLIB_STRIDED_INT32, STDLIB_STRIDED_COMPLEX128,
	STDLIB_STRIDED_FLOAT32, STDLIB_STRIDED_INT8, STDLIB_STRIDED_FLOAT32,
	STDLIB_STRIDED_FLOAT32, STDLIB_STRIDED_INT8, STDLIB_STRIDED_COMPLEX128,
	STDLIB_STRIDED_FLOAT32, STDLIB_STRIDED_INT8, STDLIB_STRIDED_COMPLEX64,
	STDLIB_STRIDED_FLOAT32, STDLIB_STRIDED_INT8, STDLIB_STRIDED_FLOAT64,
	STDLIB_STRIDED_FLOAT32, STDLIB_STRIDED_UINT16, STDLIB_STRIDED_FLOAT32,
	STDLIB_STRIDED_FLOAT32, STDLIB_STRIDED_UINT16, STDLIB_STRIDED_COMPLEX128,
	STDLIB_STRIDED_FLOAT32, STDLIB_STRIDED_UINT16, STDLIB_STRIDED_COMPLEX64,
	STDLIB_STRIDED_FLOAT32, STDLIB_STRIDED_UINT16, STDLIB_STRIDED_FLOAT64,
	STDLIB_STRIDED_FLOAT32, STDLIB_STRIDED_UINT32, STDLIB_STRIDED_FLOAT64,
	STDLIB_STRIDED_FLOAT32, STDLIB_STRIDED_UINT32, STDLIB_STRIDED_COMPLEX128,
	STDLIB_STRIDED_FLOAT32, STDLIB_STRIDED_UINT8, STDLIB_STRIDED_FLOAT32,
	STDLIB_STRIDED_FLOAT32, STDLIB_STRIDED_UINT8, STDLIB_STRIDED_COMPLEX128,
	STDLIB_STRIDED_FLOAT32, STDLIB_STRIDED_UINT8, STDLIB_STRIDED_COMPLEX64,
	STDLIB_STRIDED_FLOAT32, STDLIB_STRIDED_UINT8, STDLIB_STRIDED_FLOAT64,
	STDLIB_STRIDED_FLOAT64, STDLIB_STRIDED_COMPLEX64, STDLIB_STRIDED_COMPLEX128,
	STDLIB_STRIDED_FLOAT64, STDLIB_STRIDED_COMPLEX128, STDLIB_STRIDED_COMPLEX128,
	STDLIB_STRIDED_FLOAT64, STDLIB_STRIDED_FLOAT32, STDLIB_STRIDED_FLOAT64,
	STDLIB_STRIDED_FLOAT64, STDLIB_STRIDED_FLOAT32, STDLIB_STRIDED_COMPLEX128,
	STDLIB_STRIDED_FLOAT64, STDLIB_STRIDED_FLOAT64, STDLIB_STRIDED_FLOAT64,
	STDLIB_STRIDED_FLOAT64, STDLIB_STRIDED_FLOAT64, STDLIB_STRIDED_COMPLEX128,
	STDLIB_STRIDED_FLOAT64, STDLIB_STRIDED_INT16, STDLIB_STRIDED_FLOAT64,
	STDLIB_STRIDED_FLOAT64, STDLIB_STRIDED_INT16, STDLIB_STRIDED_COMPLEX128,
	STDLIB_STRIDED_FLOAT64, STDLIB_STRIDED_INT32, STDLIB_STRIDED_FLOAT64,
	STDLIB_STRIDED_FLOAT64, STDLIB_STRIDED_INT32, STDLIB_STRIDED_COMPLEX128,
	STDLIB_STRIDED_FLOAT64, STDLIB_STRIDED_INT8, STDLIB_STRIDED_FLOAT64,
	STDLIB_STRIDED_FLOAT64, STDLIB_STRIDED_INT8, STDLIB_STRIDED_COMPLEX128,
	STDLIB_STRIDED_FLOAT64, STDLIB_STRIDED_UINT16, STDLIB_STRIDED_FLOAT64,
	STDLIB_STRIDED_FLOAT64, STDLIB_STRIDED_UINT16, STDLIB_STRIDED_COMPLEX128,
	STDLIB_STRIDED_FLOAT64, STDLIB_STRIDED_UINT32, STDLIB_STRIDED_FLOAT64,
	STDLIB_STRIDED_FLOAT64, STDLIB_STRIDED_UINT32, STDLIB_STRIDED_COMPLEX128,
	STDLIB_STRIDED_FLOAT64, STDLIB_STRIDED_UINT8, STDLIB_STRIDED_FLOAT64,
	STDLIB_STRIDED_FLOAT64, STDLIB_STRIDED_UINT8, STDLIB_STRIDED_COMPLEX128,
	STDLIB_STRIDED_INT16, STDLIB_STRIDED_COMPLEX64, STDLIB_STRIDED_COMPLEX64,
	STDLIB_STRIDED_INT16, STDLIB_STRIDED_COMPLEX64, STDLIB_STRIDED_COMPLEX128,
	STDLIB_STRIDED_INT16, STDLIB_STRIDED_COMPLEX128, STDLIB_STRIDED_COMPLEX128,
	STDLIB_STRIDED_INT16, STDLIB_STRIDED_FLOAT32, STDLIB_STRIDED_FLOAT32,
	STDLIB_STRIDED_INT16, STDLIB_STRIDED_FLOAT32, STDLIB_STRIDED_COMPLEX128,
	STDLIB_STRIDED_INT16, STDLIB_STRIDED_FLOAT32, STDLIB_STRIDED_COMPLEX64,
	STDLIB_STRIDED_INT16, STDLIB_STRIDED_FLOAT32, STDLIB_STRIDED_FLOAT64,
	STDLIB_STRIDED_INT16, STDLIB_STRIDED_FLOAT64, STDLIB_STRIDED_FLOAT64,
	STDLIB_STRIDED_INT16, STDLIB_STRIDED_FLOAT64, STDLIB_STRIDED_COMPLEX128,
	STDLIB_STRIDED_INT16, STDLIB_STRIDED_INT16, STDLIB_STRIDED_INT16,
	STDLIB_STRIDED_INT16, STDLIB_STRIDED_INT16, STDLIB_STRIDED_COMPLEX128,
	STDLIB_STRIDED_INT16, STDLIB_STRIDED_INT16, STDLIB_STRIDED_COMPLEX64,
	STDLIB_STRIDED_INT16, STDLIB_STRIDED_INT16, STDLIB_STRIDED_FLOAT32,
	STDLIB_STRIDED_INT16, STDLIB_STRIDED_INT16, STDLIB_STRIDED_FLOAT64,
	STDLIB_STRIDED_INT16, STDLIB_STRIDED_INT16, STDLIB_STRIDED_INT32,
	STDLIB_STRIDED_INT16, STDLIB_STRIDED_INT32, STDLIB_STRIDED_INT32,
	STDLIB_STRIDED_INT16, STDLIB_STRIDED_INT32, STDLIB_STRIDED_COMPLEX128,
	STDLIB_STRIDED_INT16, STDLIB_STRIDED_INT32, STDLIB_STRIDED_FLOAT64,
	STDLIB_STRIDED_INT16, STDLIB_STRIDED_INT8, STDLIB_STRIDED_INT16,
	STDLIB_STRIDED_INT16, STDLIB_STRIDED_INT8, STDLIB_STRIDED_COMPLEX128,
	STDLIB_STRIDED_INT16, STDLIB_STRIDED_INT8, STDLIB_STRIDED_COMPLEX64,
	STDLIB_STRIDED_INT16, STDLIB_STRIDED_INT8, STDLIB_STRIDED_FLOAT32,
	STDLIB_STRIDED_INT16, STDLIB_STRIDED_INT8, STDLIB_STRIDED_FLOAT64,
	STDLIB_STRIDED_INT16, STDLIB_STRIDED_INT8, STDLIB_STRIDED_INT32,
	STDLIB_STRIDED_INT16, STDLIB_STRIDED_UINT16, STDLIB_STRIDED_INT32,
	STDLIB_STRIDED_INT16, STDLIB_STRIDED_UINT16, STDLIB_STRIDED_COMPLEX128,
	STDLIB_STRIDED_INT16, STDLIB_STRIDED_UINT16, STDLIB_STRIDED_FLOAT64,
	STDLIB_STRIDED_INT16, STDLIB_STRIDED_UINT32, STDLIB_STRIDED_FLOAT64,
	STDLIB_STRIDED_INT16, STDLIB_STRIDED_UINT32, STDLIB_STRIDED_COMPLEX128,
	STDLIB_STRIDED_INT16, STDLIB_STRIDED_UINT8, STDLIB_STRIDED_INT16,
	STDLIB_STRIDED_INT16, STDLIB_STRIDED_UINT8, STDLIB_STRIDED_COMPLEX128,
	STDLIB_STRIDED_INT16, STDLIB_STRIDED_UINT8, STDLIB_STRIDED_COMPLEX64,
	STDLIB_STRIDED_INT16, STDLIB_STRIDED_UINT8, STDLIB_STRIDED_FLOAT32,
	STDLIB_STRIDED_INT16, STDLIB_STRIDED_UINT8, STDLIB_STRIDED_FLOAT64,
	STDLIB_STRIDED_INT16, STDLIB_STRIDED_UINT8, STDLIB_STRIDED_INT32,
	STDLIB_STRIDED_INT32, STDLIB_STRIDED_COMPLEX64, STDLIB_STRIDED_COMPLEX128,
	STDLIB_STRIDED_INT32, STDLIB_STRIDED_COMPLEX128, STDLIB_STRIDED_COMPLEX128,
	STDLIB_STRIDED_INT32, STDLIB_STRIDED_FLOAT32, STDLIB_STRIDED_FLOAT64,
	STDLIB_STRIDED_INT32, STDLIB_STRIDED_FLOAT32, STDLIB_STRIDED_COMPLEX128,
	STDLIB_STRIDED_INT32, STDLIB_STRIDED_FLOAT64, STDLIB_STRIDED_FLOAT64,
	STDLIB_STRIDED_INT32, STDLIB_STRIDED_FLOAT64, STDLIB_STRIDED_COMPLEX128,
	STDLIB_STRIDED_INT32, STDLIB_STRIDED_INT16, STDLIB_STRIDED_INT32,
	STDLIB_STRIDED_INT32, STDLIB_STRIDED_INT16, STDLIB_STRIDED_COMPLEX128,
	STDLIB_STRIDED_INT32, STDLIB_STRIDED_INT16, STDLIB_STRIDED_FLOAT64,
	STDLIB_STRIDED_INT32, STDLIB_STRIDED_INT32, STDLIB_STRIDED_INT32,
	STDLIB_STRIDED_INT32, STDLIB_STRIDED_INT32, STDLIB_STRIDED_COMPLEX128,
	STDLIB_STRIDED_INT32, STDLIB_STRIDED_INT32, STDLIB_STRIDED_FLOAT64,
	STDLIB_STRIDED_INT32, STDLIB_STRIDED_INT8, STDLIB_STRIDED_INT32,
	STDLIB_STRIDED_INT32, STDLIB_STRIDED_INT8, STDLIB_STRIDED_COMPLEX128,
	STDLIB_STRIDED_INT32, STDLIB_STRIDED_INT8, STDLIB_STRIDED_FLOAT64,
	STDLIB_STRIDED_INT32, STDLIB_STRIDED_UINT16, STDLIB_STRIDED_INT32,
	STDLIB_STRIDED_INT32, STDLIB_STRIDED_UINT16, STDLIB_STRIDED_COMPLEX128,
	STDLIB_STRIDED_INT32, STDLIB_STRIDED_UINT16, STDLIB_STRIDED_FLOAT64,
	STDLIB_STRIDED_INT32, STDLIB_STRIDED_UINT32, STDLIB_STRIDED_FLOAT64,
	STDLIB_STRIDED_INT32, STDLIB_STRIDED_UINT32, STDLIB_STRIDED_COMPLEX128,
	STDLIB_STRIDED_INT32, STDLIB_STRIDED_UINT8, STDLIB_STRIDED_INT32,
	STDLIB_STRIDED_INT32, STDLIB_STRIDED_UINT8, STDLIB_STRIDED_COMPLEX128,
	STDLIB_STRIDED_INT32, STDLIB_STRIDED_UINT8, STDLIB_STRIDED_FLOAT64,
	STDLIB_STRIDED_INT8, STDLIB_STRIDED_COMPLEX64, STDLIB_STRIDED_COMPLEX64,
	STDLIB_STRIDED_INT8, STDLIB_STRIDED_COMPLEX64, STDLIB_STRIDED_COMPLEX128,
	STDLIB_STRIDED_INT8, STDLIB_STRIDED_COMPLEX128, STDLIB_STRIDED_COMPLEX128,
	STDLIB_STRIDED_INT8, STDLIB_STRIDED_FLOAT32, STDLIB_STRIDED_FLOAT32,
	STDLIB_STRIDED_INT8, STDLIB_STRIDED_FLOAT32, STDLIB_STRIDED_COMPLEX128,
	STDLIB_STRIDED_INT8, STDLIB_STRIDED_FLOAT32, STDLIB_STRIDED_COMPLEX64,
	STDLIB_STRIDED_INT8, STDLIB_STRIDED_FLOAT32, STDLIB_STRIDED_FLOAT64,
	STDLIB_STRIDED_INT8, STDLIB_STRIDED_FLOAT64, STDLIB_STRIDED_FLOAT64,
	STDLIB_STRIDED_INT8, STDLIB_STRIDED_FLOAT64, STDLIB_STRIDED_COMPLEX128,
	STDLIB_STRIDED_INT8, STDLIB_STRIDED_INT16, STDLIB_STRIDED_INT16,
	STDLIB_STRIDED_INT8, STDLIB_STRIDED_INT16, STDLIB_STRIDED_COMPLEX128,
	STDLIB_STRIDED_INT8, STDLIB_STRIDED_INT16, STDLIB_STRIDED_COMPLEX64,
	STDLIB_STRIDED_INT8, STDLIB_STRIDED_INT16, STDLIB_STRIDED_FLOAT32,
	STDLIB_STRIDED_INT8, STDLIB_STRIDED_INT16, STDLIB_STRIDED_FLOAT64,
	STDLIB_STRIDED_INT8, STDLIB_STRIDED_INT16, STDLIB_STRIDED_INT32,
	STDLIB_STRIDED_INT8, STDLIB_STRIDED_INT32, STDLIB_STRIDED_INT32,
	STDLIB_STRIDED_INT8, STDLIB_STRIDED_INT32, STDLIB_STRIDED_COMPLEX128,
	STDLIB_STRIDED_INT8, STDLIB_STRIDED_INT32, STDLIB_STRIDED_FLOAT64,
	STDLIB_STRIDED_INT8, STDLIB_STRIDED_INT8, STDLIB_STRIDED_INT8,
	STDLIB_STRIDED_INT8, STDLIB_STRIDED_INT8, STDLIB_STRIDED_COMPLEX128,
	STDLIB_STRIDED_INT8, STDLIB_STRIDED_INT8, STDLIB_STRIDED_COMPLEX64,
	STDLIB_STRIDED_INT8, STDLIB_STRIDED_INT8, STDLIB_STRIDED_FLOAT32,
	STDLIB_STRIDED_INT8, STDLIB_STRIDED_INT8, STDLIB_STRIDED_FLOAT64,
	STDLIB_STRIDED_INT8, STDLIB_STRIDED_INT8, STDLIB_STRIDED_INT16,
	STDLIB_STRIDED_INT8, STDLIB_STRIDED_INT8, STDLIB_STRIDED_INT32,
	STDLIB_STRIDED_INT8, STDLIB_STRIDED_UINT16, STDLIB_STRIDED_INT32,
	STDLIB_STRIDED_INT8, STDLIB_STRIDED_UINT16, STDLIB_STRIDED_COMPLEX128,
	STDLIB_STRIDED_INT8, STDLIB_STRIDED_UINT16, STDLIB_STRIDED_FLOAT64,
	STDLIB_STRIDED_INT8, STDLIB_STRIDED_UINT32, STDLIB_STRIDED_FLOAT64,
	STDLIB_STRIDED_INT8, STDLIB_STRIDED_UINT32, STDLIB_STRIDED_COMPLEX128,
	STDLIB_STRIDED_INT8, STDLIB_STRIDED_UINT8, STDLIB_STRIDED_INT16,
	STDLIB_STRIDED_INT8, STDLIB_STRIDED_UINT8, STDLIB_STRIDED_COMPLEX128,
	STDLIB_STRIDED_INT8, STDLIB_STRIDED_UINT8, STDLIB_STRIDED_COMPLEX64,
	STDLIB_STRIDED_INT8, STDLIB_STRIDED_UINT8, STDLIB_STRIDED_FLOAT32,
	STDLIB_STRIDED_INT8, STDLIB_STRIDED_UINT8, STDLIB_STRIDED_FLOAT64,
	STDLIB_STRIDED_INT8, STDLIB_STRIDED_UINT8, STDLIB_STRIDED_INT32,
	STDLIB_STRIDED_UINT16, STDLIB_STRIDED_COMPLEX64, STDLIB_STRIDED_COMPLEX64,
	STDLIB_STRIDED_UINT16, STDLIB_STRIDED_COMPLEX64, STDLIB_STRIDED_COMPLEX128,
	STDLIB_STRIDED_UINT16, STDLIB_STRIDED_COMPLEX128, STDLIB_STRIDED_COMPLEX128,
	STDLIB_STRIDED_UINT16, STDLIB_STRIDED_FLOAT32, STDLIB_STRIDED_FLOAT32,
	STDLIB_STRIDED_UINT16, STDLIB_STRIDED_FLOAT32, STDLIB_STRIDED_COMPLEX128,
	STDLIB_STRIDED_UINT16, STDLIB_STRIDED_FLOAT32, STDLIB_STRIDED_COMPLEX64,
	STDLIB_STRIDED_UINT16, STDLIB_STRIDED_FLOAT32, STDLIB_STRIDED_FLOAT64,
	STDLIB_STRIDED_UINT16, STDLIB_STRIDED_FLOAT64, STDLIB_STRIDED_FLOAT64,
	STDLIB_STRIDED_UINT16, STDLIB_STRIDED_FLOAT64, STDLIB_STRIDED_COMPLEX128,
	STDLIB_STRIDED_UINT16, STDLIB_STRIDED_INT16, STDLIB_STRIDED_INT32,
	STDLIB_STRIDED_UINT16, STDLIB_STRIDED_INT16, STDLIB_STRIDED_COMPLEX128,
	STDLIB_STRIDED_UINT16, STDLIB_STRIDED_INT16, STDLIB_STRIDED_FLOAT64,
	STDLIB_STRIDED_UINT16, STDLIB_STRIDED_INT32, STDLIB_STRIDED_INT32,
	STDLIB_STRIDED_UINT16, STDLIB_STRIDED_INT32, STDLIB_STRIDED_COMPLEX128,
	STDLIB_STRIDED_UINT16, STDLIB_STRIDED_INT32, STDLIB_STRIDED_FLOAT64,
	STDLIB_STRIDED_UINT16, STDLIB_STRIDED_INT8, STDLIB_STRIDED_INT32,
	STDLIB_STRIDED_UINT16, STDLIB_STRIDED_INT8, STDLIB_STRIDED_COMPLEX128,
	STDLIB_STRIDED_UINT16, STDLIB_STRIDED_INT8, STDLIB_STRIDED_FLOAT64,
	STDLIB_STRIDED_UINT16, STDLIB_STRIDED_UINT16, STDLIB_STRIDED_UINT16,
	STDLIB_STRIDED_UINT16, STDLIB_STRIDED_UINT16, STDLIB_STRIDED_COMPLEX128,
	STDLIB_STRIDED_UINT16, STDLIB_STRIDED_UINT16, STDLIB_STRIDED_COMPLEX64,
	STDLIB_STRIDED_UINT16, STDLIB_STRIDED_UINT16, STDLIB_STRIDED_FLOAT32,
	STDLIB_STRIDED_UINT16, STDLIB_STRIDED_UINT16, STDLIB_STRIDED_FLOAT64,
	STDLIB_STRIDED_UINT16, STDLIB_STRIDED_UINT16, STDLIB_STRIDED_INT32,
	STDLIB_STRIDED_UINT16, STDLIB_STRIDED_UINT16, STDLIB_STRIDED_UINT32,
	STDLIB_STRIDED_UINT16, STDLIB_STRIDED_UINT32, STDLIB_STRIDED_UINT32,
	STDLIB_STRIDED_UINT16, STDLIB_STRIDED_UINT32, STDLIB_STRIDED_COMPLEX128,
	STDLIB_STRIDED_UINT16, STDLIB_STRIDED_UINT32, STDLIB_STRIDED_FLOAT64,
	STDLIB_STRIDED_UINT16, STDLIB_STRIDED_UINT8, STDLIB_STRIDED_UINT16,
	STDLIB_STRIDED_UINT16, STDLIB_STRIDED_UINT8, STDLIB_STRIDED_COMPLEX128,
	STDLIB_STRIDED_UINT16, STDLIB_STRIDED_UINT8, STDLIB_STRIDED_COMPLEX64,
	STDLIB_STRIDED_UINT16, STDLIB_STRIDED_UINT8, STDLIB_STRIDED_FLOAT32,
	STDLIB_STRIDED_UINT16, STDLIB_STRIDED_UINT8, STDLIB_STRIDED_FLOAT64,
	STDLIB_STRIDED_UINT16, STDLIB_STRIDED_UINT8, STDLIB_STRIDED_INT32,
	STDLIB_STRIDED_UINT16, STDLIB_STRIDED_UINT8, STDLIB_STRIDED_UINT32,
	STDLIB_STRIDED_UINT32, STDLIB_STRIDED_COMPLEX64, STDLIB_STRIDED_COMPLEX128,
	STDLIB_STRIDED_UINT32, STDLIB_STRIDED_COMPLEX128, STDLIB_STRIDED_COMPLEX128,
	STDLIB_STRIDED_UINT32, STDLIB_STRIDED_FLOAT32, STDLIB_STRIDED_FLOAT64,
	STDLIB_STRIDED_UINT32, STDLIB_STRIDED_FLOAT32, STDLIB_STRIDED_COMPLEX128,
	STDLIB_STRIDED_UINT32, STDLIB_STRIDED_FLOAT64, STDLIB_STRIDED_FLOAT64,
	STDLIB_STRIDED_UINT32, STDLIB_STRIDED_FLOAT64, STDLIB_STRIDED_COMPLEX128,
	STDLIB_STRIDED_UINT32, STDLIB_STRIDED_INT16, STDLIB_STRIDED_FLOAT64,
	STDLIB_STRIDED_UINT32, STDLIB_STRIDED_INT16, STDLIB_STRIDED_COMPLEX128,
	STDLIB_STRIDED_UINT32, STDLIB_STRIDED_INT32, STDLIB_STRIDED_FLOAT64,
	STDLIB_STRIDED_UINT32, STDLIB_STRIDED_INT32, STDLIB_STRIDED_COMPLEX128,
	STDLIB_STRIDED_UINT32, STDLIB_STRIDED_INT8, STDLIB_STRIDED_FLOAT64,
	STDLIB_STRIDED_UINT32, STDLIB_STRIDED_INT8, STDLIB_STRIDED_COMPLEX128,
	STDLIB_STRIDED_UINT32, STDLIB_STRIDED_UINT16, STDLIB_STRIDED_UINT32,
	STDLIB_STRIDED_UINT32, STDLIB_STRIDED_UINT16, STDLIB_STRIDED_COMPLEX128,
	STDLIB_STRIDED_UINT32, STDLIB_STRIDED_UINT16, STDLIB_STRIDED_FLOAT64,
	STDLIB_STRIDED_UINT32, STDLIB_STRIDED_UINT32, STDLIB_STRIDED_UINT32,
	STDLIB_STRIDED_UINT32, STDLIB_STRIDED_UINT32, STDLIB_STRIDED_COMPLEX128,
	STDLIB_STRIDED_UINT32, STDLIB_STRIDED_UINT32, STDLIB_STRIDED_FLOAT64,
	STDLIB_STRIDED_UINT32, STDLIB_STRIDED_UINT8, STDLIB_STRIDED_UINT32,
	STDLIB_STRIDED_UINT32, STDLIB_STRIDED_UINT8, STDLIB_STRIDED_COMPLEX128,
	STDLIB_STRIDED_UINT32, STDLIB_STRIDED_UINT8, STDLIB_STRIDED_FLOAT64,
	STDLIB_STRIDED_UINT8, STDLIB_STRIDED_COMPLEX64, STDLIB_STRIDED_COMPLEX64,
	STDLIB_STRIDED_UINT8, STDLIB_STRIDED_COMPLEX64, STDLIB_STRIDED_COMPLEX128,
	STDLIB_STRIDED_UINT8, STDLIB_STRIDED_COMPLEX128, STDLIB_STRIDED_COMPLEX128,
	STDLIB_STRIDED_UINT8, STDLIB_STRIDED_FLOAT32, STDLIB_STRIDED_FLOAT32,
	STDLIB_STRIDED_UINT8, STDLIB_STRIDED_FLOAT32, STDLIB_STRIDED_COMPLEX128,
	STDLIB_STRIDED_UINT8, STDLIB_STRIDED_FLOAT32, STDLIB_STRIDED_COMPLEX64,
	STDLIB_STRIDED_UINT8, STDLIB_STRIDED_FLOAT32, STDLIB_STRIDED_FLOAT64,
	STDLIB_STRIDED_UINT8, STDLIB_STRIDED_FLOAT64, STDLIB_STRIDED_FLOAT64,
	STDLIB_STRIDED_UINT8, STDLIB_STRIDED_FLOAT64, STDLIB_STRIDED_COMPLEX128,
	STDLIB_STRIDED_UINT8, STDLIB_STRIDED_INT16, STDLIB_STRIDED_INT16,
	STDLIB_STRIDED_UINT8, STDLIB_STRIDED_INT16, STDLIB_STRIDED_COMPLEX128,
	STDLIB_STRIDED_UINT8, STDLIB_STRIDED_INT16, STDLIB_STRIDED_COMPLEX64,
	STDLIB_STRIDED_UINT8, STDLIB_STRIDED_INT16, STDLIB_STRIDED_FLOAT32,
	STDLIB_STRIDED_UINT8, STDLIB_STRIDED_INT16, STDLIB_STRIDED_FLOAT64,
	STDLIB_STRIDED_UINT8, STDLIB_STRIDED_INT16, STDLIB_STRIDED_INT32,
	STDLIB_STRIDED_UINT8, STDLIB_STRIDED_INT32, STDLIB_STRIDED_INT32,
	STDLIB_STRIDED_UINT8, STDLIB_STRIDED_INT32, STDLIB_STRIDED_COMPLEX128,
	STDLIB_STRIDED_UINT8, STDLIB_STRIDED_INT32, STDLIB_STRIDED_FLOAT64,
	STDLIB_STRIDED_UINT8, STDLIB_STRIDED_INT8, STDLIB_STRIDED_INT16,
	STDLIB_STRIDED_UINT8, STDLIB_STRIDED_INT8, STDLIB_STRIDED_COMPLEX128,
	STDLIB_STRIDED_UINT8, STDLIB_STRIDED_INT8, STDLIB_STRIDED_COMPLEX64,
	STDLIB_STRIDED_UINT8, STDLIB_STRIDED_INT8, STDLIB_STRIDED_FLOAT32,
	STDLIB_STRIDED_UINT8, STDLIB_STRIDED_INT8, STDLIB_STRIDED_FLOAT64,
	STDLIB_STRIDED_UINT8, STDLIB_STRIDED_INT8, STDLIB_STRIDED_INT32,
	STDLIB_STRIDED_UINT8, STDLIB_STRIDED_UINT16, STDLIB_STRIDED_UINT16,
	STDLIB_STRIDED_UINT8, STDLIB_STRIDED_UINT16, STDLIB_STRIDED_COMPLEX128,
	STDLIB_STRIDED_UINT8, STDLIB_STRIDED_UINT16, STDLIB_STRIDED_COMPLEX64,
	STDLIB_STRIDED_UINT8, STDLIB_STRIDED_UINT16, STDLIB_STRIDED_FLOAT32,
	STDLIB_STRIDED_UINT8, STDLIB_STRIDED_UINT16, STDLIB_STRIDED_FLOAT64,
	STDLIB_STRIDED_UINT8, STDLIB_STRIDED_UINT16, STDLIB_STRIDED_INT32,
	STDLIB_STRIDED_UINT8, STDLIB_STRIDED_UINT16, STDLIB_STRIDED_UINT32,
	STDLIB_STRIDED_UINT8, STDLIB_STRIDED_UINT32, STDLIB_STRIDED_UINT32,
	STDLIB_STRIDED_UINT8, STDLIB_STRIDED_UINT32, STDLIB_STRIDED_COMPLEX128,
	STDLIB_STRIDED_UINT8, STDLIB_STRIDED_UINT32, STDLIB_STRIDED_FLOAT64,
	STDLIB_STRIDED_UINT8, STDLIB_STRIDED_UINT8, STDLIB_STRIDED_UINT8,
	STDLIB_STRIDED_UINT8, STDLIB_STRIDED_UINT8, STDLIB_STRIDED_COMPLEX128,
	STDLIB_STRIDED_UINT8, STDLIB_STRIDED_UINT8, STDLIB_STRIDED_COMPLEX64,
	STDLIB_STRIDED_UINT8, STDLIB_STRIDED_UINT8, STDLIB_STRIDED_FLOAT32,
	STDLIB_STRIDED_UINT8, STDLIB_STRIDED_UINT8, STDLIB_STRIDED_FLOAT64,
	STDLIB_STRIDED_UINT8, STDLIB_STRIDED_UINT8, STDLIB_STRIDED_INT16,
	STDLIB_STRIDED_UINT8, STDLIB_STRIDED_UINT8, STDLIB_STRIDED_INT32,
	STDLIB_STRIDED_UINT8, STDLIB_STRIDED_UINT8, STDLIB_STRIDED_UINT16,
	STDLIB_STRIDED_UINT8, STDLIB_STRIDED_UINT8, STDLIB_STRIDED_UINT32
};

// Define a list of strided array function "data" (in this case, callbacks):
static void *data[] = {
	(void *)stdlib_base_complex64_add,
	(void *)stdlib_base_complex128_add,
	(void *)stdlib_base_complex128_add,
	(void *)stdlib_base_complex64_add,
	(void *)stdlib_base_complex128_add,
	(void *)stdlib_base_complex128_add,
	(void *)stdlib_base_complex64_add,
	(void *)stdlib_base_complex128_add,
	(void *)stdlib_base_complex128_add,
	(void *)stdlib_base_complex64_add,
	(void *)stdlib_base_complex128_add,
	(void *)stdlib_base_complex64_add,
	(void *)stdlib_base_complex128_add,
	(void *)stdlib_base_complex128_add,
	(void *)stdlib_base_complex64_add,
	(void *)stdlib_base_complex128_add,
	(void *)stdlib_base_complex128_add,
	(void *)stdlib_base_complex128_add,
	(void *)stdlib_base_complex128_add,
	(void *)stdlib_base_complex128_add,
	(void *)stdlib_base_complex128_add,
	(void *)stdlib_base_complex128_add,
	(void *)stdlib_base_complex128_add,
	(void *)stdlib_base_complex128_add,
	(void *)stdlib_base_complex128_add,
	(void *)stdlib_base_complex128_add,
	(void *)stdlib_base_complex64_add,
	(void *)stdlib_base_complex128_add,
	(void *)stdlib_base_complex128_add,
	(void *)stdlib_base_addf,
	(void *)stdlib_base_complex128_add,
	(void *)stdlib_base_complex64_add,
	(void *)stdlib_base_add,
	(void *)stdlib_base_add,
	(void *)stdlib_base_complex128_add,
	(void *)stdlib_base_addf,
	(void *)stdlib_base_complex128_add,
	(void *)stdlib_base_complex64_add,
	(void *)stdlib_base_add,
	(void *)stdlib_base_add,
	(void *)stdlib_base_complex128_add,
	(void *)stdlib_base_addf,
	(void *)stdlib_base_complex128_add,
	(void *)stdlib_base_complex64_add,
	(void *)stdlib_base_add,
	(void *)stdlib_base_addf,
	(void *)stdlib_base_complex128_add,
	(void *)stdlib_base_complex64_add,
	(void *)stdlib_base_add,
	(void *)stdlib_base_add,
	(void *)stdlib_base_complex128_add,
	(void *)stdlib_base_addf,
	(void *)stdlib_base_complex128_add,
	(void *)stdlib_base_complex64_add,
	(void *)stdlib_base_add,
	(void *)stdlib_base_complex128_add,
	(void *)stdlib_base_complex128_add,
	(void *)stdlib_base_add,
	(void *)stdlib_base_complex128_add,
	(void *)stdlib_base_add,
	(void *)stdlib_base_complex128_add,
	(void *)stdlib_base_add,
	(void *)stdlib_base_complex128_add,
	(void *)stdlib_base_add,
	(void *)stdlib_base_complex128_add,
	(void *)stdlib_base_add,
	(void *)stdlib_base_complex128_add,
	(void *)stdlib_base_add,
	(void *)stdlib_base_complex128_add,
	(void *)stdlib_base_add,
	(void *)stdlib_base_complex128_add,
	(void *)stdlib_base_add,
	(void *)stdlib_base_complex128_add,
	(void *)stdlib_base_complex64_add,
	(void *)stdlib_base_complex128_add,
	(void *)stdlib_base_complex128_add,
	(void *)stdlib_base_addf,
	(void *)stdlib_base_complex128_add,
	(void *)stdlib_base_complex64_add,
	(void *)stdlib_base_add,
	(void *)stdlib_base_add,
	(void *)stdlib_base_complex128_add,
	(void *)addk,
	(void *)stdlib_base_complex128_add,
	(void *)stdlib_base_complex64_add,
	(void *)stdlib_base_addf,
	(void *)stdlib_base_add,
	(void *)addi,
	(void *)addi,
	(void *)stdlib_base_complex128_add,
	(void *)stdlib_base_add,
	(void *)addk,
	(void *)stdlib_base_complex128_add,
	(void *)stdlib_base_complex64_add,
	(void *)stdlib_base_addf,
	(void *)stdlib_base_add,
	(void *)addi,
	(void *)addi,
	(void *)stdlib_base_complex128_add,
	(void *)stdlib_base_add,
	(void *)stdlib_base_add,
	(void *)stdlib_base_complex128_add,
	(void *)addk,
	(void *)stdlib_base_complex128_add,
	(void *)stdlib_base_complex64_add,
	(void *)stdlib_base_addf,
	(void *)stdlib_base_add,
	(void *)addi,
	(void *)stdlib_base_complex128_add,
	(void *)stdlib_base_complex128_add,
	(void *)stdlib_base_add,
	(void *)stdlib_base_complex128_add,
	(void *)stdlib_base_add,
	(void *)stdlib_base_complex128_add,
	(void *)addi,
	(void *)stdlib_base_complex128_add,
	(void *)stdlib_base_add,
	(void *)addi,
	(void *)stdlib_base_complex128_add,
	(void *)stdlib_base_add,
	(void *)addi,
	(void *)stdlib_base_complex128_add,
	(void *)stdlib_base_add,
	(void *)addi,
	(void *)stdlib_base_complex128_add,
	(void *)stdlib_base_add,
	(void *)stdlib_base_add,
	(void *)stdlib_base_complex128_add,
	(void *)addi,
	(void *)stdlib_base_complex128_add,
	(void *)stdlib_base_add,
	(void *)stdlib_base_complex64_add,
	(void *)stdlib_base_complex128_add,
	(void *)stdlib_base_complex128_add,
	(void *)stdlib_base_addf,
	(void *)stdlib_base_complex128_add,
	(void *)stdlib_base_complex64_add,
	(void *)stdlib_base_add,
	(void *)stdlib_base_add,
	(void *)stdlib_base_complex128_add,
	(void *)addk,
	(void *)stdlib_base_complex128_add,
	(void *)stdlib_base_complex64_add,
	(void *)stdlib_base_addf,
	(void *)stdlib_base_add,
	(void *)addi,
	(void *)addi,
	(void *)stdlib_base_complex128_add,
	(void *)stdlib_base_add,
	(void *)adds,
	(void *)stdlib_base_complex128_add,
	(void *)stdlib_base_complex64_add,
	(void *)stdlib_base_addf,
	(void *)stdlib_base_add,
	(void *)addk,
	(void *)addi,
	(void *)addi,
	(void *)stdlib_base_complex128_add,
	(void *)stdlib_base_add,
	(void *)stdlib_base_add,
	(void *)stdlib_base_complex128_add,
	(void *)addk,
	(void *)stdlib_base_complex128_add,
	(void *)stdlib_base_complex64_add,
	(void *)stdlib_base_addf,
	(void *)stdlib_base_add,
	(void *)addi,
	(void *)stdlib_base_complex64_add,
	(void *)stdlib_base_complex128_add,
	(void *)stdlib_base_complex128_add,
	(void *)stdlib_base_addf,
	(void *)stdlib_base_complex128_add,
	(void *)stdlib_base_complex64_add,
	(void *)stdlib_base_add,
	(void *)stdlib_base_add,
	(void *)stdlib_base_complex128_add,
	(void *)addi,
	(void *)stdlib_base_complex128_add,
	(void *)stdlib_base_add,
	(void *)addi,
	(void *)stdlib_base_complex128_add,
	(void *)stdlib_base_add,
	(void *)addi,
	(void *)stdlib_base_complex128_add,
	(void *)stdlib_base_add,
	(void *)addt,
	(void *)stdlib_base_complex128_add,
	(void *)stdlib_base_complex64_add,
	(void *)stdlib_base_addf,
	(void *)stdlib_base_add,
	(void *)addi,
	(void *)addu,
	(void *)addu,
	(void *)stdlib_base_complex128_add,
	(void *)stdlib_base_add,
	(void *)addt,
	(void *)stdlib_base_complex128_add,
	(void *)stdlib_base_complex64_add,
	(void *)stdlib_base_addf,
	(void *)stdlib_base_add,
	(void *)addi,
	(void *)addu,
	(void *)stdlib_base_complex128_add,
	(void *)stdlib_base_complex128_add,
	(void *)stdlib_base_add,
	(void *)stdlib_base_complex128_add,
	(void *)stdlib_base_add,
	(void *)stdlib_base_complex128_add,
	(void *)stdlib_base_add,
	(void *)stdlib_base_complex128_add,
	(void *)stdlib_base_add,
	(void *)stdlib_base_complex128_add,
	(void *)stdlib_base_add,
	(void *)stdlib_base_complex128_add,
	(void *)addu,
	(void *)stdlib_base_complex128_add,
	(void *)stdlib_base_add,
	(void *)addu,
	(void *)stdlib_base_complex128_add,
	(void *)stdlib_base_add,
	(void *)addu,
	(void *)stdlib_base_complex128_add,
	(void *)stdlib_base_add,
	(void *)stdlib_base_complex64_add,
	(void *)stdlib_base_complex128_add,
	(void *)stdlib_base_complex128_add,
	(void *)stdlib_base_addf,
	(void *)stdlib_base_complex128_add,
	(void *)stdlib_base_complex64_add,
	(void *)stdlib_base_add,
	(void *)stdlib_base_add,
	(void *)stdlib_base_complex128_add,
	(void *)addk,
	(void *)stdlib_base_complex128_add,
	(void *)stdlib_base_complex64_add,
	(void *)stdlib_base_addf,
	(void *)stdlib_base_add,
	(void *)addi,
	(void *)addi,
	(void *)stdlib_base_complex128_add,
	(void *)stdlib_base_add,
	(void *)addk,
	(void *)stdlib_base_complex128_add,
	(void *)stdlib_base_complex64_add,
	(void *)stdlib_base_addf,
	(void *)stdlib_base_add,
	(void *)addi,
	(void *)addt,
	(void *)stdlib_base_complex128_add,
	(void *)stdlib_base_complex64_add,
	(void *)stdlib_base_addf,
	(void *)stdlib_base_add,
	(void *)addi,
	(void *)addu,
	(void *)addu,
	(void *)stdlib_base_complex128_add,
	(void *)stdlib_base_add,
	(void *)addb,
	(void *)stdlib_base_complex128_add,
	(void *)stdlib_base_complex64_add,
	(void *)stdlib_base_addf,
	(void *)stdlib_base_add,
	(void *)addk,
	(void *)addi,
	(void *)addt,
	(void *)addu
};

// Create a strided array function object:
static const struct StridedFunctionObject obj = {
	// Strided array function name:
	name,

	// Number of input strided arrays:
	2,

	// Number of output strided arrays:
	1,

	// Total number of strided array arguments (nin + nout):
	3,

	// Array containing strided array functions:
	functions,

	// Number of strided array functions:
	266,

	// Array of type "numbers" (as enumerated elsewhere), where the total number of types equals `narrays * nfunctions` and where each set of `narrays` consecutive types (non-overlapping) corresponds to the set of strided array argument types for a corresponding strided array function:
	types,

	// Array of void pointers corresponding to the "data" (e.g., callbacks) which should be passed to a respective strided array function (note: the number of pointers should match the number of strided array functions):
	data
};

STDLIB_STRIDED_NAPI_MODULE_BINARY( obj )
